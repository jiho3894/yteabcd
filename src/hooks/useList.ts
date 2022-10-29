import { useCallback, useEffect, useRef, useState } from "react";
import { useGetList } from "../api/PostList/query";
import { useInput } from "./useInput";

export const useList = () => {
  const [text, setText] = useState("");
  const [listType, setListType] = useState<string>("a");
  const query = useInput(text);
  const {
    data: List,
    fetchNextPage,
    hasNextPage,
  } = useGetList(listType, query);

  const boxRef = useRef<HTMLLIElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  const intersectionObserver = useCallback(
    (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);
          if (hasNextPage) {
            fetchNextPage();
          }
        }
      });
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver(intersectionObserver);
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [List, intersectionObserver]);

  return { List, boxRef, setText, listType, setListType };
};
