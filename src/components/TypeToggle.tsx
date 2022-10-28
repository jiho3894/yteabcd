import { Dispatch, SetStateAction } from "react";

interface props {
  listType: string;
  setListType: Dispatch<SetStateAction<string>>;
}

const TypeToggle = ({ listType, setListType }: props) => {
  return (
    <div className="space-x-6 text-sm font-semibold">
      <span
        className={`${listType === "a" && "text-blue-400"} cursor-pointer`}
        onClick={() => setListType("a")}
      >
        A Posts
      </span>
      <span
        className={`${listType === "b" && "text-blue-400"} cursor-pointer`}
        onClick={() => setListType("b")}
      >
        B Posts
      </span>
    </div>
  );
};

export default TypeToggle;
