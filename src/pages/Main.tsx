/* eslint-disable no-use-before-define */
import { Col } from 'antd';
import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { AddList } from '../components/AddList';
import { TodoCard } from '../components/Cards/TodoCards';
import { Loader } from '../components/Loader';
import { AddModal } from '../components/Modal/AddModal';
import { DeleteModal } from '../components/Modal/DeleteModal';
import { Promotion } from '../components/Promotion';
import { Post } from '../types/Todos';

import { useTranslation } from 'react-i18next';
import { ButtonTranslate } from '../components/ButtonTanslate';
import { darkTheme, lightTheme } from '../themes';
import { MINUTE_MS } from '../constant/const';
import { EditModal } from '../components/Modal/EditModal';
import { ConfirmModal } from '../components/Modal/ConfirmModal';
import { CreateListModal } from '../components/Modal/CreateListModal';
import { CSSProperties } from 'styled-components';
import { Title } from '../styles';
import { movePost, reviseState } from '../redux/action/todo';
import {
  closeConfirmModal,
  closeCreateModal,
  closeDeleteModal,
  closeEditModal,
  closeNewListModal,
} from '../redux/action/modal';
import { applyTheme } from '../redux/action/theme';
import { RootState } from '../redux/type';
import { callGetPostSaga } from '../redux/action/post';

const wrapper: CSSProperties = {
  display: 'flex',
};

const cardWrapper: CSSProperties = {
  marginRight: '10px',
};

export interface PostsProps {
  body: string;
  id: string;
  title: string;
  userId: string;
  isViewed: boolean;
}

// eslint-disable-next-line no-undef
export function MainPage(): JSX.Element {
  const [post, setPost] = React.useState<Post | undefined>();
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const card = useSelector((state: any) => state.todos);
  const cards = Object.entries(card);

  const {
    isOpenCreate,
    isOpenDelete,
    isOpenEdit,
    isOpenConfirm,
    isOpenListModal,
    id,
  } = useSelector((state: RootState) => state.modal);
  const state = useSelector((state: RootState) => state.todos);

  const onDragEnd = (result: DropResult): void => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      const copiedList = [...state[source.droppableId]];
      const [reorderedItem] = copiedList.splice(result.source.index, 1);
      copiedList.splice(destination.index, 0, reorderedItem);
      const data = { name: `${source.droppableId}`, list: copiedList };
      dispatch(reviseState(data));
    } else {
      const data = {
        name: '',
        fromListName: source.droppableId,
        toListName: destination.droppableId,
        taskId: draggableId,
        idx: destination.index,
      };
      dispatch(movePost(data));
    }
  };

  const load = async (): Promise<void> => {
    const result = await dispatch(callGetPostSaga());
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
        <Title>{t('welcome.title')}</Title>
        <div style={wrapper}>
          {cards.map((el, idx) => {
            const [columnName, columnTask] = el;
            return (
              <div key={idx} style={cardWrapper}>
                <TodoCard name={columnName} column={columnTask} />
              </div>
            );
          })}
          <Col span={6}>
            <AddList />
          </Col>
        </div>
      </DragDropContext>
      <AddModal
        isOpen={isOpenCreate}
        onClose={() => {
          dispatch(closeCreateModal());
        }}
        post={post}
      />
      <DeleteModal
        isOpen={isOpenDelete}
        taskId={id as string}
        onClose={() => {
          dispatch(closeDeleteModal());
        }}
      />
      <EditModal
        isOpen={isOpenEdit}
        onClose={() => {
          dispatch(closeEditModal());
        }}
      />
      <ConfirmModal
        isOpen={isOpenConfirm}
        onClose={() => {
          dispatch(closeConfirmModal());
        }}
      />
      <CreateListModal
        isOpen={isOpenListModal}
        onClose={() => {
          dispatch(closeNewListModal());
        }}
      />
      {post ? <Promotion post={post} /> : <Loader />}
    </>
  );
}
