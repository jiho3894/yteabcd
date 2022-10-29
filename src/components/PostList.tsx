import { InfiniteData } from "react-query";
import { Link } from "react-router-dom";
import { ListProp } from "../api/PostList/type";

interface props {
  list: InfiniteData<ListProp[]> | undefined;
  listType: string;
  text: string;
  boxRef: React.RefObject<HTMLLIElement>;
}

const PostList = ({ text, list, listType, boxRef }: props) => {
  return (
    <ul>
      {list?.pages.map((data, pageIndex) =>
        data.map((item, itemIndex) => {
          return (
            <li
              key={item.id}
              ref={
                data.length * pageIndex + itemIndex ===
                list.pages.length * data.length - 1
                  ? boxRef
                  : null
              }
              className="p-4 duration-150 hover:bg-gray-100"
            >
              <Link
                onClick={() => {
                  sessionStorage.setItem("type", listType);
                  sessionStorage.setItem("text", text);
                }}
                to={`${listType}?id=${item.id}`}
              >
                <span className="font-semibold text-blue-500">{`${item.id}. `}</span>
                <span className="font-semibold">{item.title}</span>
                <p className="textBreak break-words text-sm">{item.content}</p>
              </Link>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default PostList;
