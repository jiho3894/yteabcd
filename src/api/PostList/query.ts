import { useInfiniteQuery } from "react-query";
import { instance } from "../axios";
import { IPostList } from "./type";

export const getList = async (
  type: string,
  page: number = 0,
  searchValue: string
) => {
  const { data }: IPostList = await instance.get(
    `/${type}-posts?page=${page}&search=${searchValue}`
  );
  return data;
};

export const useGetList = (type: string, searchValue: string) => {
  return useInfiniteQuery(
    ["List", type, searchValue],
    async ({ pageParam = 0 }) => {
      return await getList(
        type,
        pageParam === null ? 0 : pageParam,
        searchValue
      );
    },
    {
      getNextPageParam: (_, allPages) => {
        return allPages.length + 1;
      },
    }
  );
};
