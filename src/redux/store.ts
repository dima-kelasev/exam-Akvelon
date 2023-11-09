import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { modalReducer } from './reducers/modal';
import { themeReducer } from './reducers/theme';
import { todoReducer } from './reducers/todo';
import { postReducer } from './reducers/post';

const staticReducers = {
  todos: todoReducer,
  modal: modalReducer,
  posts: postReducer,
  theme: themeReducer,
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
