import { useEffect } from "react";
import PostList from "../components/PostList";
import Search from "../components/Search";
import TypeToggle from "../components/TypeToggle";
import { useList } from "../hooks/useList";

const Home = () => {
  const { List, boxRef, text, setText, listType, setListType } = useList();
  useEffect(() => {
    sessionStorage.setItem("text", "");
    sessionStorage.setItem("type", "a");
  }, []);
  return (
    <section>
      <header className="text-center">
        <p className="text-xl text-gray-600">게시물을 검색해보세요</p>
      </header>
      <main>
        <article className="my-10 flex w-full justify-center">
          <Search text={text} setText={setText} />
        </article>
        <article className="mb-2 border-b-[1px]">
          <TypeToggle listType={listType} setListType={setListType} />
        </article>
        <article className="rounded-md border-[1px] p-4 shadow-inner">
          <PostList
            text={text}
            list={List}
            listType={listType}
            boxRef={boxRef}
          />
        </article>
      </main>
    </section>
  );
};

export default Home;
