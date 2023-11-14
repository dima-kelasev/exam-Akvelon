import { RootState } from '../../../type';

const data = (state: RootState) => state.posts.posts;

export const selectors = {
  data,
};
