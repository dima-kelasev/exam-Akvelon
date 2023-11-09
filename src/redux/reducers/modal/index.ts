import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_MODAL_STATE } from './constants';
import { ModalState } from '../ModalReducers';
import { AddTodoList } from '../todoReducers';

const slice = createSlice({
  name: 'modal',
  initialState: INITIAL_MODAL_STATE,
  reducers: {
    openCreateModal: (
      state: ModalState,
      action: PayloadAction<AddTodoList>
    ) => {
      state.isOpenCreate = true;
      state.name = action.payload.data.name;
    },
    openDeleteModal: (
      state: ModalState,
      action: PayloadAction<AddTodoList>
    ) => {
      state.isOpenDelete = true;
      state.name = action.payload.data.name;
      state.id = action.payload.data.id;
    },
    openEditModal: (state: ModalState, action: PayloadAction<AddTodoList>) => {
      state.isOpenEdit = true;
      state.name = action.payload.data.name;
      state.id = action.payload.data.id;
    },
    openConfirmModal: (
      state: ModalState,
      action: PayloadAction<AddTodoList>
    ) => {
      state.isOpenConfirm = true;
      state.name = action.payload.data.name;
      state.id = action.payload.data.id;
      state.value = action.payload.data.value;
      state.description = action.payload.data.description;
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

export const modalReducer = slice.reducer;
