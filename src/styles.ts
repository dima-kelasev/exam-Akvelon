import { Card, Button, Row } from "antd";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import Select from "@mui/material/Select";

export const StyledSelect = styled(Select)`
  color: ${(props) => props.theme.title};
  .jIWkLN {
  }
`;

export const StyledPharagraph = styled.p`
  color: ${(props: any) => props.theme.interface};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
`;

export const BodyStyled = styled.div`
  background-color: ${(props: any) => props.theme.backgroundColor};
`;

export const ModalPromotion = styled.div`
  background: ${(props: any) => props.theme.primary};
  border-radius: 10px;
  padding: 5px;
  margin: 10px 0 0 0;
  color: #fff;
  font-size: 12px;
`;

export const WrapperLoader = styled.div`
  position: absolute;
  bottom: 50px;
  left: 45%;
`;

export const PromotionCard = styled(Card)`
  background: ${(props: any) => props.theme.primary};
  margin: 0 auto 10px;
  color: #fff;
  border: 1px solid #d3d3d3;
  position: absolute;
  bottom: 0;
  left: 15%;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  text-align: center;
`;

export const FormItemButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;

export const Input = styled.input`
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  &:focus {
    outline: none;
  }
`;

export const EditModalInput = styled.input`
  border: 0;
  width: 90%;
  background: transparent;
  margin: 10px 0 0;
  color: ${(props: any) => props.theme.textColor};
  &:focus {
    outline: none;
  }
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledCard = styled(Card)`
  width: 300px;
  background: ${(props: any) => props.theme.interface};
  padding: 10px;
  text-align: left;
  color: ${(props) => props.theme.textColor};
  border-radius: 10px;
`;

export const Columns = styled.div`
  border-radius: 5px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const TaskDescription = styled.p`
  margin: 0;
  font-size: 12px;
  color: #000;
  opacity: 0.5;
`;

export const TaskTitle = styled.p`
  margin: 0;
`;

export const ContentWrapper = styled.div`
  width: 90%;
`;

export const AddButton = styled(Button)`
  background: transparent;
  margin-left: 10px;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
`;

export const FormButton = styled(Button)`
  margin-right: 10px;
  border: 0;
  background: ${(props) => props.theme.primary};
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
  bottom: 189px;
  left: 38%;
  z-index: 2;
  width: 300px;
  background: ${(props: any) => props.theme.interface};
  border-radius: 10px;
  color: ${(props: any) => props.theme.textColor};
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
