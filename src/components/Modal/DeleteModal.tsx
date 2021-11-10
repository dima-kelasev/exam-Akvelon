import React, { useContext } from "react";
import ReactDOM from "react-dom";
import {
  CloseIcon,
  StyledModal,
  FormItemButton,
  FormButton,
} from "../../styles";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { removeTodo } from "../../redux/todoSlice";
import { DeleteTaskModalContext } from "../../Context/DeleteTaskContextModal";

const { Title } = Typography;

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const DeleteModal = ({ isOpen, onClose }: DeleteModalProps) => {
  const { idDeleteModal } = useContext(DeleteTaskModalContext);
  const dispatch = useDispatch<AppDispatch>();
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledModal>
      <Title level={3} style={{ margin: "0, 0, 10px, 0 " }}>
        Are you sure?
      </Title>
      <CloseIcon onClick={onClose} />
      <FormItemButton style={{ justifyContent: "center" }}>
        <FormButton onClick={onClose} htmlType="submit">
          No
        </FormButton>
        <FormButton
          style={{ background: "#ff4d4f" }}
          onClick={(): void => {
            dispatch(removeTodo(idDeleteModal));
            onClose();
          }}
        >
          Yes
        </FormButton>
      </FormItemButton>
    </StyledModal>,
    document.body
  );
};
