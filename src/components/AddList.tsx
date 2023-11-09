import { useDispatch } from 'react-redux';
import { AddComponent } from '../styles';
import { openNewListModal } from '../redux/action/modal';

export function AddList() {
  const dispatch = useDispatch();

  const openListModal = () => {
    dispatch(openNewListModal());
  };
  return (
    <AddComponent onClick={openListModal}>+ Add another List</AddComponent>
  );
}
