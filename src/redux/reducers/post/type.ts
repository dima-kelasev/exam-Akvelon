export type Posts = {
  type: string;
  data: string;
};

export type PostStateType = {
  posts: string[];
  isLoading?: boolean;
  isError?: boolean;
};
