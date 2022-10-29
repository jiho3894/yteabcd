import { useLocation } from "react-router-dom";

//detail data에 필요한 정보 return 함수
export const usePath = () => {
  const location = useLocation();
  const type = location.pathname.split("")[1];
  const id = location.search.split("=")[1];
  return { type, id };
};
