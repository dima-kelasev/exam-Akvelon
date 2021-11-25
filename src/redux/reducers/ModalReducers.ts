import { AddTodoList } from "./todoReducers";

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

const initialStateModal: ModalState = {
  isOpenCreate: false,
  isOpenDelete: false,
  isOpenEdit: false,
  isOpenConfirm: false,
  isOpenListModal: false,
  id: "",
  name: "",
  value: "",
  description: "",
};

export const modal = (state = initialStateModal, action: AddTodoList) => {
  switch (action.type) {
    case "OPEN_CREATE_MODAL":
      return {
        isOpenCreate: true,
        name: action.data.name,
      };

    case "OPEN_DELETE_MODAL":
      return {
        isOpenDelete: true,
        id: action.data.id,
        name: action.data.name,
      };
    case "OPEN_EDIT_MODAL":
      return {
        isOpenEdit: true,
        id: action.data.id,
        name: action.data.name,
      };
    case "OPEN_CONFIRM_MODAL":
      return {
        isOpenConfirm: true,
        id: action.data.id,
        name: action.data.name,
        value: action.data.value,
        description: action.data.description,
      };
    case "OPEN_NEW_LIST_MODAL":
      return {
        isOpenListModal: true,
      };
    case "CLOSE_MODAL":
      return {
        isOpenCreate: false,
      };
    case "CLOSE_DELETE_MODAL":
      return {
        isOpenDelete: false,
      };
    case "CLOSE_EDIT_MODAL":
      return {
        isOpenEdit: false,
      };
    case "CLOSE_CONFIRM_MODAL":
      return {
        isOpenConfirm: false,
      };
    case "CLOSE_NEW_LIST_MODAL":
      return {
        isOpenListModal: false,
      };
    default:
      return state;
  }
};
