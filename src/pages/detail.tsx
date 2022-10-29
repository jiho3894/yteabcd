import { useNavigate } from "react-router-dom";
import { useGetDetail } from "../api/PostDetail/query";
import { usePath } from "../hooks/usePath";

const Detail = () => {
  const navigate = useNavigate();
  const { type, id } = usePath();
  const { data: item } = useGetDetail(type, id);
  return (
    <div className="space-y-4">
      <header className="h-full space-y-8 border-[1px] p-8">
        <p className="mb-8 text-center text-3xl font-semibold">{item?.title}</p>
        <span className="text-sm">{item?.content}</span>
      </header>
      <div
        onClick={() => navigate(-1)}
        className="inline-block cursor-pointer rounded-md bg-blue-500 px-5 py-3 text-sm text-white"
      >
        뒤로가기
      </div>
    </div>
  );
};

export default Detail;
