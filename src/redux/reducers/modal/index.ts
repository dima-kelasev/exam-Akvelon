import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_MODAL_STATE } from './constants';
import { IDataType, ModalState } from './type';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_MODAL_STATE,
  reducers: {
    openCreateModal: (state: ModalState, action: PayloadAction<IDataType>) => {
      state.isOpenCreate = true;
      state.name = action.payload.name;
    },
    openDeleteModal: (state: ModalState, action: PayloadAction<IDataType>) => {
      state.isOpenDelete = true;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    openEditModal: (state: ModalState, action: PayloadAction<IDataType>) => {
      state.isOpenEdit = true;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    openConfirmModal: (state: ModalState, action: PayloadAction<IDataType>) => {
      state.isOpenConfirm = true;
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.value = action.payload.value;
      state.description = action.payload.description;
    },
    openNewListModal: (state: ModalState) => {
      state.isOpenListModal = true;
    },
    closeCreateModal: (state: ModalState) => {
      state.isOpenCreate = false;
    },
    closeDeleteModal: (state: ModalState) => {
      state.isOpenDelete = false;
    },
    closeEditModal: (state: ModalState) => {
      state.isOpenEdit = false;
    },
    closeConfirmModal: (state: ModalState) => {
      state.isOpenConfirm = false;
    },
    closeNewListModal: (state: ModalState) => {
      state.isOpenListModal = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;
