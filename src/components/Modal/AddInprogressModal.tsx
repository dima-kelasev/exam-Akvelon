import React, { ReactNode, useState } from "react";
import ReactDOM from "react-dom";

import {
  CloseIcon,
  StyledModal,
  FormItemButton,
  FormButton,
  Input,
} from "../../styles";
import { Typography } from "antd";

import { useDispatch } from "react-redux";

// import { addProgressList } from "../../redux/todoSlice";

const { Title } = Typography;

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}
export const AddInProgressModal = ({ isOpen, onClose }: AddModalProps) => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledModal>
      <Title level={3} style={{ margin: "0, 0, 10px, 0 " }}>
        Add New Task
      </Title>
      <CloseIcon onClick={onClose} />
      <Input
        required
        autoFocus
        placeholder="...new task"
        type="text"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <FormItemButton>
        <FormButton style={{ background: "#ff4d4f" }} onClick={onClose}>
          Cancel
        </FormButton>
        <FormButton
          onClick={() => {
            const data = { name: "inProgressList", value: todoDescription };
            dispatch({ type: "ADD_TASK", data });
            setTodoDescription("");
            onClose();
          }}
          htmlType="submit"
        >
          Add
        </FormButton>
      </FormItemButton>
    </StyledModal>,
    document.body
  );
};
