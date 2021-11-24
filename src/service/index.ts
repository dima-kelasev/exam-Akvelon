import { Todo } from "../types/Todos";

export const filteredNumbers = (array: any) => {
  const exempleArray = Array.from(Array(100).keys());
  const newNumber = exempleArray.filter((el) => {
    return !array.includes(el);
  });
  return newNumber;
};

export function editTask(item: Todo, dispatch: any, name: string) {
  const data = { id: item.id, name: name };
  dispatch({ type: "OPEN_EDIT_MODAL", data });
}

export function deleteColumns(item: Todo, dispatch: any, name: string) {
  const data = { id: item.id, name: name };
  dispatch({ type: "OPEN_DELETE_MODAL", data });
}
