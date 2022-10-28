import { useLocation } from "react-router-dom";

export const usePath = () => {
  const location = useLocation();
  const type = location.pathname.split("")[1];
  const id = location.search.split("=")[1];
  return { type, id };
};
