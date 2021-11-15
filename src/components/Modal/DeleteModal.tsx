import React from "react";
import ReactDOM from "react-dom";
import {
  CloseIcon,
  StyledModal,
  FormItemButton,
  FormButton,
} from "../../styles";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";

const { Title } = Typography;

interface DeleteModalProps {
  isOpen: boolean;
  taskId: string;
  onClose: () => void;
}
export const DeleteModal = ({ isOpen, onClose, taskId }: DeleteModalProps) => {
  const dispatch = useDispatch();

  const nameDeleteColumns = useSelector((state: any) => state.modal.name);

  const onDelete = () => {
    const data = {
      name: nameDeleteColumns,
      id: taskId,
    };
    dispatch({ type: "DELETE_TASK", data });
    onClose();
    // window.location.reload();
  };

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
        <FormButton style={{ background: "#ff4d4f" }} onClick={onDelete}>
          Yes
        </FormButton>
      </FormItemButton>
    </StyledModal>,
    document.body
  );
};
