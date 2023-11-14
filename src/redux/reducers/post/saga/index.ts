import { all } from 'redux-saga/effects';
import { PostsSagas } from './get-post.saga';

export default function* rootSaga() {
  yield all([PostsSagas.root()]);
}
