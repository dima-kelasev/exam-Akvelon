import React from "react";
import { useDispatch } from "react-redux";
import { AddComponent } from "../styles";

export function AddList(): JSX.Element {
  const dispatch = useDispatch();

  const openListModal = () => {
    dispatch({ type: "OPEN_NEW_LIST_MODAL" });
  };
  return (
    <AddComponent onClick={openListModal}>+ Add another List</AddComponent>
  );
}
