import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_TODO_STATE } from './constants';
import { DataType, StateType, Todo } from './type';
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_TODO_STATE,
  reducers: {
    addTask: (state: StateType, action: PayloadAction<DataType>) => {
      const data = action.payload;
      const copiedList = state[data.name].slice();
      const task: Todo = { id: uuidv4(), description: data.value };
      copiedList.push(task);
      const newState = {
        ...state,
        [data.name]: copiedList,
      };
      newState;
    },
    createNewList: (state: StateType, action: PayloadAction<DataType>) => {
      const data = action.payload;
      const newList = {
        ...state,
        [data.name]: [],
      };
      newList;
    },
    deleteTask: (state: StateType, action: PayloadAction<DataType>) => {
      const data = action.payload;
      const copied = state[data.name].slice();
      const filteredCopy = copied.filter((task) => task.id !== data.id);
      const newState = {
        ...state,
        [data.name]: filteredCopy,
      };
      newState;
    },
    editTask: (state: StateType, action: PayloadAction<DataType>) => {
      const data = action.payload;
      const copiedSate = state[data.name].slice();
      const filteredTask = copiedSate.filter((task) => task.id === data.id);
      const a = filteredTask[0];
      a.value = data.value;
      a.description = data.description;
      const newState = {
        ...state,
      };
      newState;
    },
    reviseState: (state: StateType, action: PayloadAction<DataType>) => {
      const data = action.payload;
      const copiedState = { ...state };
      // @ts-ignore
      copiedState[data.name] = data.list;
      const revisedState = {
        ...copiedState,
      };
      revisedState;
    },
    movePost: (state: StateType, action: PayloadAction<DataType>) => {
      const data = action.payload;

      const { fromListName, toListName, taskId, idx } = data;
      const fromList = state[fromListName as string];
      const taskIdx = fromList.findIndex((el) => el.id === taskId);
      const getNewState = () => {
        if (fromList && taskIdx !== -1) {
          const copiedTask = fromList[taskIdx];
          const toList = state[toListName as string];
          toList.splice(idx as number, 0, copiedTask);
          return {
            ...state,
            [toListName as string]: toList,
            [fromListName as string]: fromList.filter((el) => el.id !== taskId),
          };
        }
        return {
          ...state,
        };
      };
      const newState = getNewState();
      newState;
    },
  },
});

export const todoReducer = todoSlice.reducer;
