import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddButton, Pharagraph } from "../../styles";
import { Card } from "../Card";
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
import { Todo } from "../../types/Todos";

export function InProgressCard(): JSX.Element {
  const inProgressList: Todo[] = useSelector(
    (state: any) => state.todos.inProgressList
  );

  const dispatch = useDispatch();
  return (
    <Card nameCard="In Progress columns">
      {inProgressList.map((todo) => (
        <Pharagraph key={todo.id}>
          {todo.description}
          <DeleteTwoTone
            onClick={(): void => {
              const data = { id: todo.id, name: "inProgressList" };
              dispatch({ type: "OPEN_DELETE_MODAL", data });
            }}
            style={{ cursor: "pointer" }}
          />
        </Pharagraph>
      ))}
      <AddButton
        onClick={() => {
          dispatch({ type: "OPEN_INPROGRESS" });
        }}
      >
        + Add another card
      </AddButton>
    </Card>
  );
}
