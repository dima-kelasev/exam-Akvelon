import { DraggingStyle, NotDraggingStyle } from "react-beautiful-dnd";

const grid = 8;

export const getItemStyle = (
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined
): React.CSSProperties => ({
  userSelect: "none",
  padding: grid,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? "lightgreen" : "grey",
  color: " #fff",
  ...draggableStyle,
});

export const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 280,
  borderRadius: 10,
});
