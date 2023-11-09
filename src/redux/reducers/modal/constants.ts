import { ModalState } from '../ModalReducers';

export const INITIAL_MODAL_STATE: ModalState = {
  isOpenCreate: false,
  isOpenDelete: false,
  isOpenEdit: false,
  isOpenConfirm: false,
  isOpenListModal: false,
  id: '',
  name: '',
  value: '',
  description: '',
};
