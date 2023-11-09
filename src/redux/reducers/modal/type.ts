import { Todo } from '../../../types/Todos';

export type ModalState = {
  isOpenCreate: boolean;
  isOpenDelete: boolean;
  isOpenEdit: boolean;
  isOpenConfirm: boolean;
  isOpenListModal: boolean;
  id?: string;
  name?: string;
  value?: string;
  description?: string;
};

export interface IDataType {
  name: string;
  otherArray?: string;
  value?: string;
  id?: string;
  list?: Todo[];
  description?: string;
  idx?: number;
}
