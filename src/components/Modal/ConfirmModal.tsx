import Title from "antd/lib/typography/Title";
import React from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseIcon,
  FormButton,
  FormItemButton,
  StyledModal,
} from "../../styles";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConfirmModal({ isOpen, onClose }: ConfirmModalProps) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { id, name, value, description } = useSelector(
    (state: any) => state.modal
  );

  const handleCancel = (): void => {
    const data = {
      id,
      name,
      value,
      description,
    };
    dispatch({ type: "OPEN_EDIT_MODAL", data });
  };

  const editTask = (): void => {
    const data = {
      id,
      name,
      value: `${value.length === 0 ? "" : value}`,
      description: `${description.length === 0 ? "" : description}`,
    };
    dispatch({ type: "EDIT_TASK", data });
    onClose();
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledModal>
      <Title level={3} style={{ margin: "0, 0, 10px, 0 " }}>
        {t("modal.deleteTitle")}
      </Title>

      <CloseIcon onClick={onClose} />
      <FormItemButton style={{ justifyContent: "center" }}>
        <FormButton onClick={handleCancel} htmlType="submit">
          {t("modal.no")}
        </FormButton>
        <FormButton onClick={editTask} style={{ background: "#ff4d4f" }}>
          {t("modal.yes")}
        </FormButton>
      </FormItemButton>
    </StyledModal>,
    document.body
  );
}
