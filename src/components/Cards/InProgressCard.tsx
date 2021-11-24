import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddButton, Columns, TaskDescription } from "../../styles";
import { Card } from "../Card";
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
import { Todo } from "../../types/Todos";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getItemStyle, getListStyle } from "./styles";
import { useTranslation } from "react-i18next";
import { deleteColumns, editTask } from "../../service";

export function InProgressCard(): JSX.Element {
  const { t } = useTranslation("common");
  const inProgressList: Todo[] = useSelector(
    (state: any) => state.todos.inProgressList
  );

  const dispatch = useDispatch();
  return (
    <Card nameCard={t("todoCards.titleInProgress")}>
      <Droppable droppableId="inProgressList">
        {(provided, snapshot): JSX.Element => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {inProgressList.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot): JSX.Element => (
                  <Columns
                    key={index}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <div
                      style={{ width: "90%" }}
                      onClick={() => {
                        editTask(item, dispatch, "inProgressList");
                      }}
                    >
                      <p style={{ margin: 0 }}>{item.description}</p>
                      <TaskDescription>{item.value}</TaskDescription>
                    </div>
                    <DeleteTwoTone
                      onClick={(): void => {
                        deleteColumns(item, dispatch, "inProgressList");
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </Columns>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddButton
        onClick={() => {
          const data = { name: "inProgressList" };
          dispatch({ type: "OPEN_CREATE_MODAL", data });
        }}
      >
        {t("todoCards.addButton")}
      </AddButton>
    </Card>
  );
}
