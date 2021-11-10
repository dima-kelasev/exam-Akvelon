import { Col } from "antd";
import React, { useContext } from "react";
import { AddList } from "../components/AddList";
import { DoneCard } from "../components/Cards/DoneCard";
import { InProgressCard } from "../components/Cards/InProgressCard";
import { TodoCard } from "../components/Cards/TodoCards";
import { AddInProgressModal } from "../components/Modal/AddInprogressModal";
import { AddModal } from "../components/Modal/AddModal";
import { DeleteModal } from "../components/Modal/DeleteModal";
import { AddTaskModalContext } from "../Context/AddTaskModalContextProvider";
import { DeleteTaskModalContext } from "../Context/DeleteTaskContextModal";
import { StyledRow } from "../styles";

export function MainPage(): JSX.Element {
  const { isOpenModalAdd, closeModalAdd } = useContext(AddTaskModalContext);
  const { isOpenModalInProgress } = useContext(AddTaskModalContext);
  const { isOpenModalDelete, closeDeleteModal } = useContext(
    DeleteTaskModalContext
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
        message="Add New Task"
        isOpen={isOpenModalAdd}
        onClose={closeModalAdd}
      />
      <AddInProgressModal
        message="Add New Task"
        isOpen={isOpenModalInProgress}
        onClose={closeModalAdd}
      />
      <DeleteModal isOpen={isOpenModalDelete} onClose={closeDeleteModal} />
    </>
  );
}
