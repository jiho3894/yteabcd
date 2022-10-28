import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { instance } from "../axios";
import { ListProp } from "../PostList/type";
import { IPostDetail } from "./type";

export const useGetDetail = (type: string, id: string) => {
  return useQuery<IPostDetail, AxiosError, ListProp>(
    ["Detail", type, id],
    () => instance.get(`/${type}-posts/${id}`),
    {
      select: (data) => data.data,
    }
  );
};
