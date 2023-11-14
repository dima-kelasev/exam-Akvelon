import { POST_LIMIT } from '../constant/const';
import { filteredNumbers } from '../service';

export const loadData = () => async (dispatch: any, getState: any) => {
  const { posts } = getState().posts;

  if (posts.length === POST_LIMIT) {
    dispatch({ type: 'DROP_STATE' });
  }
  const stateNewId = filteredNumbers(posts);
  const randomElement =
    stateNewId[Math.floor(Math.random() * stateNewId.length)];

  const URL = `https://jsonplaceholder.typicode.com/posts/${randomElement}`;
  try {
    const response = await fetch(URL);
    const result = await response.json();

    if (result) {
      dispatch({ type: 'SET_VIEWED_POST', data: result.id });
    }

    return result;
  } catch (e) {
    console.error(e);
  }
};
