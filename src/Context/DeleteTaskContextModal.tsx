import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { noop } from "../consatant/const";

type DeleteTaskModal = {
  isOpenModalDelete: boolean;
  openDeleteModal: (id: string) => void;
  closeDeleteModal: () => void;
  idDeleteModal: string;
};

const initialDeleteTaskModalContextValue = {
  isOpenModalDelete: false,
  openDeleteModal: noop,
  closeDeleteModal: noop,
  idDeleteModal: "",
};

export const DeleteTaskModalContext = createContext<DeleteTaskModal>(
  initialDeleteTaskModalContextValue
);

export const DeleteTaskModalContextProvider = ({
  children,
}: PropsWithChildren<{}>): JSX.Element => {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [idDeleteModal, setIdDeleteModal] = useState("");

  const openDeleteModal = (id: string): void => {
    setIsOpenModalDelete(true);
    setIdDeleteModal(id);
  };

  const closeDeleteModal = () => {
    setIsOpenModalDelete(false);
    setIdDeleteModal("");
  };

  const [context, setContext] = useState<DeleteTaskModal>({
    isOpenModalDelete,
    openDeleteModal,
    closeDeleteModal,
    idDeleteModal,
  });

  useEffect(() => {
    setContext({
      isOpenModalDelete,
      openDeleteModal,
      closeDeleteModal,
      idDeleteModal,
    });
  }, [isOpenModalDelete, idDeleteModal]);
  return (
    <DeleteTaskModalContext.Provider value={context}>
      {children}
    </DeleteTaskModalContext.Provider>
  );
};
