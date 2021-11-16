import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddButton, Pharagraph } from "../../styles";
import { Card } from "../Card";
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
import { Todo } from "../../types/Todos";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { getItemStyle, getListStyle } from "./styles";

export function InProgressCard(): JSX.Element {
  const inProgressList: Todo[] = useSelector(
    (state: any) => state.todos.inProgressList
  );

  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) return;
    const copiedList = [...inProgressList];
    const [reorderedItem] = copiedList.splice(result.source.index, 1);
    copiedList.splice(result.destination.index, 0, reorderedItem);
    const data = { name: "inProgressList", list: copiedList };
    dispatch({ type: "REVISE_STATE", data });
  };

  const dispatch = useDispatch();
  return (
    <Card nameCard="InProgress columns">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot): JSX.Element => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {inProgressList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot): JSX.Element => (
                    <Pharagraph
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.description}
                      <DeleteTwoTone
                        onClick={(): void => {
                          const data = { id: item.id, name: "inProgressList" };
                          dispatch({ type: "OPEN_DELETE_MODAL", data });
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </Pharagraph>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddButton
        onClick={() => {
          const data = { name: "inProgressList" };
          dispatch({ type: "OPEN_CREATE_MODAL", data });
        }}
      >
        + Add another card
      </AddButton>
    </Card>
  );
}
