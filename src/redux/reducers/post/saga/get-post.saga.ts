import { call, put, select, takeLatest } from 'redux-saga/effects';
import { callGetPostSaga, dropState, setViewPost } from '../../../action/post';

import { POST_LIMIT } from '../../../../constant/const';
import { filteredNumbers } from '../../../../service';
import { selectors } from '../selectors';
import { getPosts } from '../../../../api/get-posts';

export function* runLoadDataSaga() {
  const posts: string[] = yield select(selectors.data);

  if (posts.length === POST_LIMIT) {
    dropState();
  }
  const stateNewId = filteredNumbers(posts);
  const randomElement =
    stateNewId[Math.floor(Math.random() * stateNewId.length)];

  try {
    const res: Awaited<ReturnType<typeof getPosts>> = yield call(
      getPosts,
      randomElement
    );
    yield put(setViewPost, res.data.id);
  } catch (e) {
    console.error(e);
  }
}

export function* root() {
  yield takeLatest(callGetPostSaga, runLoadDataSaga);
}

export const PostsSagas = {
  root,
};
