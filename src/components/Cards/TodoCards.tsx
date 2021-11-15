import { AddButton, Pharagraph } from "../../styles";
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card";
import { Todo } from "../../types/Todos";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { getItemStyle, getListStyle } from "./styles";

export const TodoCard = (): JSX.Element => {
  const TodoList: Todo[] = useSelector((state: any) => state.todos.todoList);
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) return;
    const copiedList = [...TodoList];
    const [reorderedItem] = copiedList.splice(result.source.index, 1);
    copiedList.splice(result.destination.index, 0, reorderedItem);
    const data = { name: "todoList", list: copiedList };
    dispatch({ type: "REVISE_STATE", data });
  };

  return (
    <Card nameCard="TODO columns">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot): JSX.Element => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {TodoList.map((item, index) => (
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
                          const data = { id: item.id, name: "todoList" };
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
          dispatch({ type: "OPEN_CREATE_MODAL" });
        }}
      >
        + Add another card
      </AddButton>
    </Card>
  );
};
