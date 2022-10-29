import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useRef } from "react";

interface props {
  setText: Dispatch<SetStateAction<string>>;
}

const Search = ({ setText }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  //div 태그 클릭시 input 태그 focus
  const onClickInput = () => {
    inputRef.current?.focus();
  };
  return (
    <div
      onClick={onClickInput}
      className="w-80 space-x-2 rounded-md border-[1px] p-3 text-sm text-gray-400 duration-150 focus-within:border-blue-400  hover:border-blue-400"
    >
      <FontAwesomeIcon icon={faSearch} />
      <input
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="검색어를 입력하세요"
        className="w-64"
      />
    </div>
  );
};

export default Search;
