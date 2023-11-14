import { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  CloseIcon,
  FormButton,
  FormItemButton,
  Input,
  StyledModal,
} from '../../styles';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { createNewList } from '../../redux/action/todo';

const { Title } = Typography;

interface CreateListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateListModal({ isOpen, onClose }: CreateListModalProps) {
  const { t } = useTranslation('common');
  const [nameList, setNameList] = useState('');
  const dispatch = useDispatch();

  const addList = () => {
    const data = { name: nameList };
    dispatch(createNewList(data));
    setNameList('');
    onClose();
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledModal>
      <Title level={3} style={{ margin: '0, 0, 10px, 0 ' }}>
        {t('modal.newList')}
      </Title>
      <CloseIcon onClick={onClose} />
      <Input
        required
        autoFocus
        placeholder={t('modal.listPlaceholder')}
        type="text"
        value={nameList}
        onChange={(e) => setNameList(e.target.value)}
      />
      <FormItemButton>
        <FormButton style={{ background: '#ff4d4f' }} onClick={onClose}>
          {t('modal.cancel')}
        </FormButton>
        <FormButton onClick={addList}>{t('modal.add')}</FormButton>
      </FormItemButton>
    </StyledModal>,
    document.body
  );
}
