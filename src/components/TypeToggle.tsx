import { Dispatch, SetStateAction } from "react";

interface props {
  listType: string;
  setListType: Dispatch<SetStateAction<string>>;
}

const TypeToggle = ({ listType, setListType }: props) => {
  return (
    <div className="flex text-sm font-semibold">
      <span
        className={`${listType === "a" && "text-blue-400"} typeSpan `}
        onClick={() => setListType("a")}
      >
        A Posts
      </span>
      <span
        className={`${listType === "b" && "text-blue-400"} typeSpan`}
        onClick={() => setListType("b")}
      >
        B Posts
      </span>
    </div>
  );
};

export default TypeToggle;
