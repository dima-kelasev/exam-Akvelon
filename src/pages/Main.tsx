import { Col } from "antd";
import React, { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { AddList } from "../components/AddList";
import { DoneCard } from "../components/Cards/DoneCard";
import { InProgressCard } from "../components/Cards/InProgressCard";
import { TodoCard } from "../components/Cards/TodoCards";
import { Loader } from "../components/Loader";
import { AddModal } from "../components/Modal/AddModal";
import { DeleteModal } from "../components/Modal/DeleteModal";
import { Promotion } from "../components/Promotion";
import { StyledRow } from "../styles";
// import { QuoteApp } from "../test";
import { Post, Todo } from "../types/Todos";
import { loadData } from "./action";

export interface PostsProps {
  body: string;
  id: string;
  title: string;
  userId: string;
  isViewed: boolean;
}

export function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const [post, setPost] = React.useState<Post | undefined>();
  const { isOpenCreate, isOpenDelete, id } = useSelector(
    (state: any) => state.modal
  );
  const state = useSelector((state: any) => state.todos);

  const deleteItem = (list: any, index: any) => {
    return list.splice(index, 1);
  };

  const onDragEnd = (result: DropResult): void => {
    const { source, destination, draggableId } = result;
    console.log("result", result);
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      const copiedList = [...state[source.droppableId]];
      const [reorderedItem] = copiedList.splice(result.source.index, 1);
      copiedList.splice(destination.index, 0, reorderedItem);
      const data = { name: `${source.droppableId}`, list: copiedList };
      dispatch({ type: "REVISE_STATE", data });
    } else {
      // const postList = state[source.droppableId];
      // const removed = deleteItem(postList, source.index);
      // postList.splice(destination.index, 0, removed);
      const data = {
        fromListName: source.droppableId,
        toListName: destination.droppableId,
        taskId: draggableId,
      };
      dispatch({ type: "MOVE_POST", data });
    }
  };

  const load = async (): Promise<void> => {
    const result = await dispatch(loadData());
    // @ts-ignore
    setPost(result);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <h1>Task manager</h1>
        <StyledRow gutter={16}>
          <Col span={6}>
            <TodoCard />
          </Col>
          <Col span={6}>
            <InProgressCard />
          </Col>
          <Col span={6}>
            <DoneCard />
          </Col>
          <Col span={6}>
            <AddList />
          </Col>
        </StyledRow>
      </DragDropContext>
      <AddModal
        isOpen={isOpenCreate}
        onClose={() => {
          dispatch({ type: "CLOSE_MODAL" });
        }}
        post={post}
      />
      <DeleteModal
        isOpen={isOpenDelete}
        taskId={id}
        onClose={() => {
          dispatch({ type: "CLOSE_DELETE_MODAL" });
        }}
      />
      {/* {post ? <Promotion post={post} /> : <Loader />} */}
    </>
  );
}
