import { Reducer, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { modalReducer } from './reducers/modal';
import { themeReducer } from './reducers/theme';
import { todoReducer } from './reducers/todo';
import { postReducer } from './reducers/post';

export const saga = createSagaMiddleware();

const staticReducers = {
  todos: todoReducer,
  modal: modalReducer,
  posts: postReducer,
  theme: themeReducer,
};

export const configurationStore = (initialState = {}) => {
  const store = configureStore({
    reducer: staticReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).prepend(saga),
    preloadedState: initialState,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.asyncReducers = {};
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.asyncSagas = {};

  saga.run(rootSaga);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.injectReducer = (key: string, asyncReducer: Reducer) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (store.asyncReducers) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store.asyncReducers[key] = asyncReducer;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store.replaceReducer(createReducer(store.asyncReducers));
    }
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.injectSaga = (key, val) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (store.asyncSagas && !store.asyncSagas[key]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store.asyncSagas[key] = saga.run(val);
    }
  };

  return store;
};

export const store = configurationStore();
