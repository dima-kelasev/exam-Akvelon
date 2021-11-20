import React, { ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import {
  CloseIcon,
  StyledModal,
  FormItemButton,
  FormButton,
  Input,
  ModalPromotion,
} from "../../styles";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PostsProps } from "../../pages/Main";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  post?: PostsProps;
}
export const AddModal = ({ isOpen, onClose, post }: AddModalProps) => {
  const { t } = useTranslation("common");
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();
  const nameColumn = useSelector((state: any) => state.modal.name);

  const addTask = (): void => {
    const data = { name: `${nameColumn}`, value: todoDescription };
    dispatch({ type: "ADD_TASK", data });
    setTodoDescription("");
    onClose();
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledModal>
      <Title level={3} style={{ margin: "0, 0, 10px, 0 " }}>
        {t("modal.addTask")}
      </Title>
      <CloseIcon onClick={onClose} />
      <Input
        required
        autoFocus
        placeholder={t("modal.placeholder")}
        type="text"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <FormItemButton>
        <FormButton style={{ background: "#ff4d4f" }} onClick={onClose}>
          {t("modal.cancel")}
        </FormButton>
        <FormButton onClick={addTask} htmlType="submit">
          {t("modal.add")}
        </FormButton>
      </FormItemButton>

      {post ? (
        <ModalPromotion>
          <p>{post.title}</p>
          <p>
            {t("modal.promotion")}&nbsp; {post.id}
          </p>
          <p>{post.body}</p>
        </ModalPromotion>
      ) : (
        <div />
      )}
    </StyledModal>,
    document.body
  );
};
