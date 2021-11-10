import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AddButton, Pharagraph } from "../../styles";
import { Card } from "../Card";
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
import { DeleteTaskModalContext } from "../../Context/DeleteTaskContextModal";
import { AddTaskModalContext } from "../../Context/AddTaskModalContextProvider";

export function InProgressCard(): JSX.Element {
  const inProgressList = useSelector((state: RootState) => state);
  const { openDeleteModal } = useContext(DeleteTaskModalContext);
  const { openModalInProgress } = useContext(AddTaskModalContext);
  return (
    <Card nameCard="In Progress columns">
      {inProgressList.map((todo) => (
        <Pharagraph key={todo.id}>
          {todo.description}
          <DeleteTwoTone
            onClick={(): void => {
              openDeleteModal(todo.id);
            }}
            style={{ cursor: "pointer" }}
          />
        </Pharagraph>
      ))}
      <AddButton onClick={openModalInProgress}> + Add another card</AddButton>
    </Card>
  );
}
