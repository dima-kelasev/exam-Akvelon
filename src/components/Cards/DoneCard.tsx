import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card";
import { Todo } from "../../types/Todos";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getItemStyle, getListStyle } from "./styles";
import {
  AddButton,
  Columns,
  ContentWrapper,
  TaskDescription,
  TaskTitle,
} from "../../styles";
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
import { useTranslation } from "react-i18next";
import { deleteColumns, editTask } from "../../service";

export function DoneCard(): JSX.Element {
  const { t } = useTranslation("common");
  const doneList: Todo[] = useSelector((state: any) => state.todos.doneList);
  const dispatch = useDispatch();

  return (
    <Card nameCard={t("todoCards.titleDone")}>
      <Droppable droppableId="doneList">
        {(provided, snapshot): JSX.Element => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {doneList.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot): JSX.Element => (
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
                        editTask(item, dispatch, "doneList");
                      }}
                    >
                      <TaskTitle>{item.description}</TaskTitle>
                      <TaskDescription>{item.value}</TaskDescription>
                    </ContentWrapper>
                    <DeleteTwoTone
                      onClick={(): void => {
                        deleteColumns(item, dispatch, "doneList");
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
          const data = { name: "doneList" };
          dispatch({ type: "OPEN_CREATE_MODAL", data });
        }}
      >
        {t("todoCards.addButton")}
      </AddButton>
    </Card>
  );
}
