import { useCallback, useEffect, useRef, useState } from "react";
import { useGetList } from "../api/PostList/query";
import { useInput } from "./useInput";

export const useInfiniteRef = () => {
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
          // 관찰하고 있는 entry가 화면에 보여지는 경우
          io.unobserve(entry.target); // entry 관찰 해제
          if (hasNextPage) {
            fetchNextPage(); // 다음 페이지 데이터 요청
          }
        }
      });
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    if (observerRef.current) {
      // 기존에 IntersectionObserver이 있을 경우
      observerRef.current.disconnect(); // 연결 해제
    }
    observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver 새롭게 정의
    boxRef.current && observerRef.current.observe(boxRef.current); // boxRef 관찰 시작
  }, [List, intersectionObserver]);

  return { List, boxRef, setText, listType, setListType };
};
