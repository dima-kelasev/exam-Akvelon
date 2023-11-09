import ReactDOM from 'react-dom';
import {
  CloseIcon,
  StyledModal,
  FormItemButton,
  FormButton,
} from '../../styles';
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { deleteTask } from '../../redux/action/todo';

const { Title } = Typography;

interface DeleteModalProps {
  isOpen: boolean;
  taskId: string;
  onClose: () => void;
}
export const DeleteModal = ({ isOpen, onClose, taskId }: DeleteModalProps) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const nameDeleteColumns = useSelector((state: any) => state.modal.name);

  const onDelete = () => {
    const data = {
      name: nameDeleteColumns,
      id: taskId,
    };
    dispatch(deleteTask(data));
    onClose();
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledModal>
      <Title level={3} style={{ margin: '0, 0, 10px, 0 ' }}>
        {t('modal.deleteTitle')}
      </Title>
      <CloseIcon onClick={onClose} />
      <FormItemButton style={{ justifyContent: 'center' }}>
        <FormButton onClick={onClose} htmlType="submit">
          {t('modal.no')}
        </FormButton>
        <FormButton style={{ background: '#ff4d4f' }} onClick={onDelete}>
          {t('modal.yes')}
        </FormButton>
      </FormItemButton>
    </StyledModal>,
    document.body
  );
};
