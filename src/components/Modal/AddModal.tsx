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
import { AppDispatch } from "../../redux/store";
import { addTodoList } from "../../redux/todoSlice";

const { Title } = Typography;

interface AddModalProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}
export const AddModal = ({ isOpen, onClose }: AddModalProps) => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledModal>
      <Title level={3} style={{ margin: "0, 0, 10px, 0 " }}>
        Add New Task
      </Title>
      <CloseIcon onClick={onClose} />
      <Input
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
            dispatch(addTodoList(todoDescription));
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
