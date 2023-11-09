import { todos } from './reducers/todoReducers';
import { modal } from './reducers/ModalReducers';
import { posts } from './reducers/postsReducer';
import { themeReducer } from './reducers/themeReducer';
import {
  // applyMiddleware,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { modalReducer } from './reducers/modal';
// import { modalReducer } from './reducers/modal/index';

const allReducers = {
  ...todos,
  ...modal,
  ...posts,
  ...themeReducer,
};

export type AppState = {
  [key in keyof typeof allReducers]: ReturnType<(typeof allReducers)[key]>;
};

// export const rootReducer = combineReducers({
//   todos,
//   modal,
//   posts,
//   themeReducer,
// });

// const createReducer = () => ({
//   todos,
//   modal,
//   posts,
//   themeReducer,
// });

const staticReducers = {
  // todos: ,
  modal: modalReducer,
  // posts: ,
  // themeReducer: ,
};

export const store = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: staticReducers,
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
    preloadedState: initialState,
  });

  const saga = sagaMiddleware.run(rootSaga);

  return { ...store, saga };
};
