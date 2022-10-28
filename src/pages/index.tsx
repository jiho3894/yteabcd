import PostList from "../components/PostList";
import { useInfiniteRef } from "../hooks/useInfiniteRef";
import Search from "../components/Search";
import TypeToggle from "../components/TypeToggle";

const Home = () => {
  const { List, boxRef, setText, listType, setListType } = useInfiniteRef();
  return (
    <section>
      <header className="text-center">
        <p className="text-xl text-gray-600">게시물을 검색해보세요</p>
      </header>
      <main>
        <article className="my-10 flex w-full justify-center">
          <Search setText={setText} />
        </article>
        <article className="mb-2 border-b-[1px] py-2">
          <TypeToggle listType={listType} setListType={setListType} />
        </article>
        <article className="rounded-md border-[1px] p-4 shadow-inner">
          <PostList list={List} listType={listType} boxRef={boxRef} />
        </article>
      </main>
    </section>
  );
};

export default Home;
