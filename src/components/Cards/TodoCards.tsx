import { AddButton, Pharagraph } from "../../styles";
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card";
import { Todo } from "../../types/Todos";

export function TodoCard(): JSX.Element {
  const todoList: Todo[] = useSelector((state: any) => state.todos.todoList);
  const dispatch = useDispatch();

  return (
    <Card nameCard="TODO columns">
      {todoList?.map((todo) => (
        <Pharagraph key={todo.id}>
          {todo.description}
          <DeleteTwoTone
            onClick={(): void => {
              const data = { id: todo.id, name: "todoList" };
              dispatch({ type: "OPEN_DELETE_MODAL", data });
            }}
            style={{ cursor: "pointer" }}
          />
        </Pharagraph>
      ))}
      <AddButton
        onClick={() => {
          dispatch({ type: "OPEN_CREATE_MODAL" });
        }}
      >
        + Add another card
      </AddButton>
    </Card>
  );
}
