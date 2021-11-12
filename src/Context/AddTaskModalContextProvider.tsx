import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { noop } from "../consatant/const";

type AddTaskModal = {
  isOpenModalAdd: boolean;
  isOpenModalInProgress: boolean;
  openModalAdd: () => void;
  openModalInProgress: () => void;
  closeModalAdd: () => void;
  closeModaInProgress: () => void;
};

const initialAddTaskModalContextValue = {
  isOpenModalAdd: false,
  isOpenModalInProgress: false,
  openModalAdd: noop,
  openModalInProgress: noop,
  closeModalAdd: noop,
  closeModaInProgress: noop,
};

export const AddTaskModalContext = createContext<AddTaskModal>(
  initialAddTaskModalContextValue
);

export const AddTaskModalContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalInProgress, setIsOpenModalInProgress] = useState(false);

  const openModalAdd = (): void => {
    setIsOpenModalAdd(true);
  };

  const openModalInProgress = () => {
    setIsOpenModalInProgress(true);
  };

  const closeModalAdd = (): void => {
    setIsOpenModalAdd(false);
  };

  const closeModaInProgress = (): void => {
    setIsOpenModalInProgress(false);
  };

  const [context, setContext] = useState<AddTaskModal>({
    isOpenModalAdd,
    isOpenModalInProgress,
    openModalAdd,
    openModalInProgress,
    closeModalAdd,
    closeModaInProgress,
  });

  useEffect(() => {
    setContext({
      isOpenModalAdd,
      isOpenModalInProgress,
      openModalAdd,
      openModalInProgress,
      closeModalAdd,
      closeModaInProgress,
    });
  }, [isOpenModalAdd, isOpenModalInProgress]);
  return (
    <AddTaskModalContext.Provider value={context}>
      {children}
    </AddTaskModalContext.Provider>
  );
};
