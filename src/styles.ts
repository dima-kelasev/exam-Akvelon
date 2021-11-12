import { Row } from "antd";
import { Card, Button } from "antd";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

export const FormItemButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;

export const Input = styled.input`
  border: 0;
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledCard = styled(Card)`
  width: 300px;
  background: #cdc2c2;
  padding: 10px;
  text-align: left;
  color: #000;
  border-radius: 10px;
`;

export const Pharagraph = styled.p`
  border-radius: 5px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const AddButton = styled(Button)`
  background: transparent;
  margin-left: 10px;
  border: 0;
  cursor: pointer;
`;

export const FormButton = styled(Button)`
  margin-right: 10px;
  border: 0;
  background: #1890ff;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  padding: 10px;
`;

export const AddComponent = styled.p`
  background: #00adff;
  padding: 10px;
  width: 300px;
  border-radius: 10px;
  margin-top: 0;
  cursor: pointer;
`;

export const StyledModal = styled.div`
  position: relative;
  left: 38%;
  z-index: 2;
  width: 300px;
  background: #fff;
  border-radius: 10px;
  color: #000;
  text-align: center;
  padding: 10px;
  -webkit-box-shadow: 4px 4px 30px 15px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 30px 15px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 30px 15px rgba(34, 60, 80, 0.2);
`;

export const CloseIcon = styled(CloseOutlined)`
  position: absolute;
  top: 7px;
  right: 7px;
`;
