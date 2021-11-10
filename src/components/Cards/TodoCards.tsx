import React, { useContext } from "react";
import { AddButton, Pharagraph } from "../../styles";
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
import { DeleteTaskModalContext } from "../../Context/DeleteTaskContextModal";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Card } from "../Card";
import { AddTaskModalContext } from "../../Context/AddTaskModalContextProvider";

export function TodoCard(): JSX.Element {
  const { openDeleteModal } = useContext(DeleteTaskModalContext);
  const { openModalAdd } = useContext(AddTaskModalContext);
  const todoList = useSelector((state: RootState) => state);

  return (
    <Card nameCard="TODO columns">
      {todoList.map((todo) => (
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
      <AddButton onClick={openModalAdd}> + Add another card</AddButton>
    </Card>
  );
}
