export type Todo = {
  id: string;
  description: string;
  value?: string;
};

export type Post = {
  body: string;
  id: string;
  title: string;
  userId: string;
  isViewed: boolean;
};
