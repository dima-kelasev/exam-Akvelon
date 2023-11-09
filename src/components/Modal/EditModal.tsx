import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  CloseIcon,
  EditModalInput,
  FormButton,
  FormItemButton,
  StyledModal,
} from '../../styles';
import { Todo } from '../../types/Todos';
import { openConfirmModal } from '../../redux/action/modal';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  post?: Todo;
}

export function EditModal({ isOpen, onClose }: EditModalProps) {
  const [todoDescription, setTodoDescription] = useState('');
  const [todoTitle, setTodoTitle] = useState('');

  const nameColumn = useSelector((state: any) => state.modal.name);
  const post = useSelector((state: any) => state.todos[nameColumn]);
  const idTask = useSelector((state: any) => state.modal.id);

  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  if (!post) return null;
  const task = post.filter((post: any) => post.id === idTask)[0];

  const openConfirmModalHandle = () => {
    const data = {
      id: `${idTask}`,
      name: `${nameColumn}`,
      value: `${todoDescription.length === 0 ? task.value : todoDescription}`,
      description: `${todoTitle.length === 0 ? task.description : todoTitle}`,
    };

    dispatch(openConfirmModal(data));
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <StyledModal>
      <div style={{ textAlign: 'left' }}>
        <p style={{ marginBottom: 0 }}>Title: </p>&nbsp;
        <EditModalInput
          type="text"
          defaultValue={task.description}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </div>
      <CloseIcon onClick={onClose} />
      <h3 style={{ textAlign: 'left', marginBottom: 0 }}>
        {t('modal.description')}:
      </h3>
      &nbsp;
      <EditModalInput
        maxLength={100}
        defaultValue={task.value}
        type="text"
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <FormItemButton>
        <FormButton style={{ background: '#ff4d4f' }} onClick={onClose}>
          {t('modal.cancel')}
        </FormButton>
        <FormButton onClick={openConfirmModalHandle}>
          {t('modal.save')}
        </FormButton>
      </FormItemButton>
    </StyledModal>,
    document.body
  );
}
