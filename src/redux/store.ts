import { combineReducers } from "redux";
import { todos } from "./reducers/todoReducers";
import { modal } from "./reducers/ModalReducers";

const allReducers = {
  ...todos,
  ...modal,
};

export type AppState = {
  [key in keyof typeof allReducers]: ReturnType<typeof allReducers[key]>;
};

export const rootReducer = combineReducers({
  todos,
  modal,
});
