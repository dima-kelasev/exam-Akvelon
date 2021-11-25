/* eslint-disable react-hooks/exhaustive-deps */
import { Col } from "antd";
import React, { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { AddList } from "../components/AddList";
import { TodoCard } from "../components/Cards/TodoCards";
import { Loader } from "../components/Loader";
import { AddModal } from "../components/Modal/AddModal";
import { DeleteModal } from "../components/Modal/DeleteModal";
import { Promotion } from "../components/Promotion";
import { StyledRow, Title } from "../styles";
import { Post } from "../types/Todos";
import { loadData } from "./action";
import { useTranslation } from "react-i18next";
import { ButtonTranslate } from "../components/ButtonTanslate";
import { ThemeSelector } from "../components/ThemeSelector";
import { applyTheme } from "../redux/themeActions";
import { darkTheme, lightTheme } from "../themes";
import { MINUTE_MS } from "../constant/const";
import { EditModal } from "../components/Modal/EditModal";
import { ConfirmModal } from "../components/Modal/ConfirmModal";
import { CreateListModal } from "../components/Modal/CreateListModal";

export interface PostsProps {
  body: string;
  id: string;
  title: string;
  userId: string;
  isViewed: boolean;
}

export function MainPage(): JSX.Element {
  const [post, setPost] = React.useState<Post | undefined>();
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const card = useSelector((state: any) => state.todos);
  const cards = Object.entries(card);

  const {
    isOpenCreate,
    isOpenDelete,
    isOpenEdit,
    isOpenConfirm,
    isOpenListModal,
    id,
  } = useSelector((state: any) => state.modal);
  const state = useSelector((state: any) => state.todos);

  const onDragEnd = (result: DropResult): void => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      const copiedList = [...state[source.droppableId]];
      const [reorderedItem] = copiedList.splice(result.source.index, 1);
      copiedList.splice(destination.index, 0, reorderedItem);

      const data = { name: `${source.droppableId}`, list: copiedList };
      dispatch({ type: "REVISE_STATE", data });
    } else {
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

  const changeTheme = (theme: any) => {
    dispatch(applyTheme(theme));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().getHours();
      if (time > 6 && time < 18) {
        changeTheme(lightTheme);
      } else {
        changeTheme(darkTheme);
      }
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <ButtonTranslate />
        <Title>{t("welcome.title")}</Title>
        <StyledRow gutter={16}>
          {cards.map((el, idx) => {
            const [columnName, columnTask] = el;
            return (
              <Col key={idx} span={6}>
                <TodoCard name={columnName} column={columnTask} />
              </Col>
            );
          })}
          <Col span={6}>
            <AddList />
          </Col>
        </StyledRow>
      </DragDropContext>
      <ThemeSelector />
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
      <EditModal
        isOpen={isOpenEdit}
        onClose={() => {
          dispatch({ type: "CLOSE_EDIT_MODAL" });
        }}
      />
      <ConfirmModal
        isOpen={isOpenConfirm}
        onClose={() => {
          dispatch({ type: "CLOSE_CONFIRM_MODAL" });
        }}
      />
      <CreateListModal
        isOpen={isOpenListModal}
        onClose={() => {
          dispatch({ type: "CLOSE_NEW_LIST_MODAL" });
        }}
      />
      {post ? <Promotion post={post} /> : <Loader />}
    </>
  );
}
