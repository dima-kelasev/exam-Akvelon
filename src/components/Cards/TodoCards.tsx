import {
  AddButton,
  Columns,
  ContentWrapper,
  TaskDescription,
  TaskTitle,
} from "../../styles";
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card";
import { Todo } from "../../types/Todos";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getItemStyle, getListStyle } from "./styles";
import { useTranslation } from "react-i18next";
import { deleteColumns, editTask } from "../../service";

export const TodoCard = (): JSX.Element => {
  const { t } = useTranslation("common");
  const TodoList: Todo[] = useSelector((state: any) => state.todos.todoList);
  const dispatch = useDispatch();

  return (
    <Card nameCard={t("todoCards.titleTodo")}>
      <Droppable droppableId="todoList">
        {(provided, snapshot): JSX.Element => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {TodoList.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot): JSX.Element => (
                  <div>
                    <Columns
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <ContentWrapper
                        onClick={() => {
                          editTask(item, dispatch, "todoList");
                        }}
                      >
                        <TaskTitle>{item.description}</TaskTitle>
                        <TaskDescription>{item.value}</TaskDescription>
                      </ContentWrapper>
                      <DeleteTwoTone
                        onClick={(): void => {
                          deleteColumns(item, dispatch, "todoList");
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </Columns>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddButton
        onClick={() => {
          const data = { name: "todoList" };
          dispatch({ type: "OPEN_CREATE_MODAL", data });
        }}
      >
        {t("todoCards.addButton")}
      </AddButton>
    </Card>
  );
};
