import { modalSlice } from '../../reducers/modal';

export const {
  openCreateModal,
  openDeleteModal,
  openEditModal,
  openConfirmModal,
  openNewListModal,
  closeCreateModal,
  closeDeleteModal,
  closeEditModal,
  closeConfirmModal,
  closeNewListModal,
} = modalSlice.actions;
