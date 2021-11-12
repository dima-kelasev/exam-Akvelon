import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { noop } from "../consatant/const";

type DeleteTaskModal = {
  isOpenModalDelete: boolean;
  nameDispatch: boolean;
  openDeleteModal: (id: string, name: boolean) => void;
  closeDeleteModal: () => void;
  idDeleteModal: string;
};

const initialDeleteTaskModalContextValue = {
  isOpenModalDelete: false,
  nameDispatch: false,
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
  const [nameDispatch, setNameDispatch] = useState(false);

  const openDeleteModal = (id: string, name: boolean): void => {
    setIsOpenModalDelete(true);
    setIdDeleteModal(id);
    setNameDispatch(name);
  };

  const closeDeleteModal = () => {
    setIsOpenModalDelete(false);
    setIdDeleteModal("");
  };

  const [context, setContext] = useState<DeleteTaskModal>({
    isOpenModalDelete,
    nameDispatch,
    openDeleteModal,
    closeDeleteModal,
    idDeleteModal,
  });

  useEffect(() => {
    setContext({
      isOpenModalDelete,
      nameDispatch,
      openDeleteModal,
      closeDeleteModal,
      idDeleteModal,
    });
  }, [isOpenModalDelete, idDeleteModal, nameDispatch]);
  return (
    <DeleteTaskModalContext.Provider value={context}>
      {children}
    </DeleteTaskModalContext.Provider>
  );
};
