import React from "react";
import { MainPage } from "./pages/Main";
import { AddTaskModalContextProvider } from "./Context/AddTaskModalContextProvider";
import { DeleteTaskModalContextProvider } from "./Context/DeleteTaskContextModal";

export const App = (): JSX.Element => {
  return (
    <AddTaskModalContextProvider>
      <DeleteTaskModalContextProvider>
        <MainPage />
      </DeleteTaskModalContextProvider>
    </AddTaskModalContextProvider>
  );
};
