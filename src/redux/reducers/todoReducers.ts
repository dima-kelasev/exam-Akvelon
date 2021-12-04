/* eslint-disable no-unused-vars */
import { Todo } from "../../types/Todos";
import { v4 as uuidv4 } from "uuid";

type dataType = {
  name: string;
  otherArray: string;
  value: string;
  id?: string;
  list: Todo[];
  description: string;
  idx: number;
};

export type AddTodoList = {
  type: string;
  data: dataType;
};

type StateType = {
  [key: string]: Todo[];
};

const initialState: StateType = {
  todoList: [],
  inProgressList: [],
  doneList: [],
};

export const todos = (state = initialState, action: AddTodoList) => {
  const { data } = action;
  switch (action.type) {
    case "ADD_TASK":
      const copiedList = state[data.name].slice();
      const task: Todo = { id: uuidv4(), description: data.value };
      copiedList.push(task);
      return {
        ...state,
        [data.name]: copiedList,
      };
    case "CREATE_NEW_LIST":
      return {
        ...state,
        [data.name]: [],
      };
    case "DELETE_TASK":
      const copied = state[data.name].slice();
      const filteredCopy = copied.filter((task) => task.id !== data.id);
      return {
        ...state,
        [data.name]: filteredCopy,
      };
    case "EDIT_TASK":
      const copiedSate = state[data.name].slice();
      const filteredTask = copiedSate.filter((task) => task.id === data.id);
      const a = filteredTask[0];
      a.value = data.value;
      a.description = data.description;
      return {
        ...state,
      };
    case "REVISE_STATE":
      const copiedState = { ...state };
      copiedState[data.name] = data.list;
      return {
        ...copiedState,
      };
    case "MOVE_POST":
      // @ts-ignore
      const { fromListName, toListName, taskId, idx } = data;
      const fromList = state[fromListName];
      const taskIdx = fromList.findIndex((el) => el.id === taskId);
      if (fromList && taskIdx !== -1) {
        const copiedTask = fromList[taskIdx];
        const toList = state[toListName];
        toList.splice(idx, 0, copiedTask);
        return {
          ...state,
          [toListName]: toList,
          [fromListName]: fromList.filter((el) => el.id !== taskId),
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
