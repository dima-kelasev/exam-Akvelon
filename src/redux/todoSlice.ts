import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/Todos";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoList: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
        } as Todo,
      }),
    },
    addProgressList: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addTodoList, addProgressList, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
