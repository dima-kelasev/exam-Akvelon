import { AddTodoList } from "./todoReducers";

export type ModalState = {
  isOpenCreate: boolean;
  isOpenInProgressiv: boolean;
  isOpenDelete: boolean;
  id?: string;
  name?: string;
};

const initialStateModal: ModalState = {
  isOpenCreate: false,
  isOpenInProgressiv: false,
  isOpenDelete: false,
  id: "",
  name: "",
};

export const modal = (state = initialStateModal, action: AddTodoList) => {
  switch (action.type) {
    case "OPEN_CREATE_MODAL":
      return {
        isOpenCreate: true,
      };
    case "OPEN_INPROGRESS":
      return {
        isOpenInProgressiv: true,
      };
    case "OPEN_DELETE_MODAL":
      return {
        isOpenDelete: true,
        id: action.data.id,
        name: action.data.name,
      };
    case "CLOSE_MODAL":
      return {
        isOpenCreate: false,
      };
    case "CLOSE_DELETE_MODAL":
      return {
        isOpenDelete: false,
      };
    default:
      return state;
  }
};
