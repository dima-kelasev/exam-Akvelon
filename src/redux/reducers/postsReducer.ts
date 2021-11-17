export type Posts = {
  type: string;
  data: string;
};

type StateType = {
  posts: string[];
};

const initialState: StateType = {
  posts: [],
};

export const posts = (state = initialState, action: Posts) => {
  const { data } = action;
  switch (action.type) {
    case "SET_VIEWED_POST":
      const posts = state.posts.slice();
      posts.push(data);
      return {
        ...state,
        posts,
      };
    case "DROP_STATE":
      return initialState;
    default:
      return state;
  }
};
