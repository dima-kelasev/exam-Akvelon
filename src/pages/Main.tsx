import { Col } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddList } from "../components/AddList";
import { DoneCard } from "../components/Cards/DoneCard";
import { InProgressCard } from "../components/Cards/InProgressCard";
import { TodoCard } from "../components/Cards/TodoCards";
import { AddInProgressModal } from "../components/Modal/AddInprogressModal";
import { AddModal } from "../components/Modal/AddModal";
import { DeleteModal } from "../components/Modal/DeleteModal";
import { StyledRow } from "../styles";

export function MainPage(): JSX.Element {
  const dispatch = useDispatch();

  const { isOpenCreate, isOpenInProgressiv, isOpenDelete, id } = useSelector(
    (state: any) => state.modal
  );

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
      <AddInProgressModal
        isOpen={isOpenInProgressiv}
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
    </>
  );
}
