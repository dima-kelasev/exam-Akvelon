import { openDeleteModal, openEditModal } from '../redux/action/modal';
import { Todo } from '../types/Todos';

export const filteredNumbers = (array: any) => {
  const exampleArray = Array.from(Array(100).keys());
  const newNumber = exampleArray.filter((el) => {
    return !array.includes(el);
  });
  return newNumber;
};

export function editTask(item: Todo, dispatch: any, name: string) {
  const data = { id: item.id, name: name };
  dispatch(openEditModal(data));
}

export function deleteColumns(item: Todo, dispatch: any, name: string) {
  const data = { id: item.id, name: name };
  dispatch(openDeleteModal(data));
}
