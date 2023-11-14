import { ModalState } from './reducers/modal/type';
import { PostStateType } from './reducers/post/type';
import { IThemeState } from './reducers/theme/type';
import { StateType } from './reducers/todo/type';

export interface RootState {
  todos: StateType;
  modal: ModalState;
  posts: PostStateType;
  theme: IThemeState;
}
