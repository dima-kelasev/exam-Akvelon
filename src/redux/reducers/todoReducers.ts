import { Todo } from "../../types/Todos";
import { v4 as uuidv4 } from "uuid";

type dataType = {
  name: string;
  value?: string;
  id?: string;
  list: Todo[];
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
  DoneList: [],
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
    case "DELETE_TASK":
      const copied = state[data.name].slice();
      const filteredCopy = copied.filter((task) => task.id !== data.id);
      return {
        ...state,
        [data.name]: filteredCopy,
      };
    case "REVISE_STATE":
      const copiedState = { ...state };
      copiedState[data.name] = data.list;
      return {
        ...copiedState,
      };
    default:
      return state;
  }
};
