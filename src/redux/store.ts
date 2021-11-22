import { combineReducers } from "redux";
import { todos } from "./reducers/todoReducers";
import { modal } from "./reducers/ModalReducers";
import { posts } from "./reducers/postsReducer";
import { themeReducer } from "./reducers/themeReducer";

const allReducers = {
  ...todos,
  ...modal,
  ...posts,
  ...themeReducer,
};

export type AppState = {
  [key in keyof typeof allReducers]: ReturnType<typeof allReducers[key]>;
};

export const rootReducer = combineReducers({
  todos,
  modal,
  posts,
  themeReducer,
});
