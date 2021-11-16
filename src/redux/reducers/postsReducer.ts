import { Post } from "../../types/Todos";

type dataType = {
  body: string;
  id: string;
  title: string;
  userId: string;
  isViewed: boolean;
};

export type AddPostsList = {
  type: string;
  data: dataType;
};

type StateType = {
  posts: Post[];
};

const initialState: StateType = {
  posts: [],
};

export const posts = (state = initialState, action: AddPostsList) => {
  const { data } = action;
  switch (action.type) {
    case "ADD_POSTS":
      const posts = state.posts.slice();
      posts.map((item) => {
        item.isViewed = false;
      });

      posts.push(data);
      return {
        ...state,
        posts,
      };
    default:
      return state;
  }
};
