export interface ListProp {
  id: string;
  title: string;
  content: string;
  type: "a" | "b";
  createAt?: string;
}

export interface IPostList {
  data: ListProp[];
}
