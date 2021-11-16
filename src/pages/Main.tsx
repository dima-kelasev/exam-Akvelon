import { Col } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddList } from "../components/AddList";
import { DoneCard } from "../components/Cards/DoneCard";
import { InProgressCard } from "../components/Cards/InProgressCard";
import { TodoCard } from "../components/Cards/TodoCards";
import { AddModal } from "../components/Modal/AddModal";
import { DeleteModal } from "../components/Modal/DeleteModal";
import { Promotion } from "../components/Promotion";
import { StyledRow } from "../styles";
import { Post } from "../types/Todos";
import { loadData } from "./action";

export interface PostsProps {
  body: string;
  id: string;
  title: string;
  userId: string;
}
type StateType = {
  [key: string]: Post[];
};
export function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  // const [posts, setPosts] = useState<PostsProps>();
  const post = useSelector((state: any) => state.posts.posts);

  const { isOpenCreate, isOpenDelete, id } = useSelector(
    (state: any) => state.modal
  );

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <>
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
      <AddModal
        isOpen={isOpenCreate}
        onClose={() => {
          dispatch({ type: "CLOSE_MODAL" });
        }}
      />
      <DeleteModal
        isOpen={isOpenDelete}
        taskId={id}
        onClose={() => {
          dispatch({ type: "CLOSE_DELETE_MODAL" });
        }}
      />
      {/* <Promotion post={post} /> */}
    </>
  );
}
