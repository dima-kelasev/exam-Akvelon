import React, { useContext } from "react";
import { StyledCard, AddButton } from "../styles";
import { Typography } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { AddTaskModalContext } from "../Context/AddTaskModalContextProvider";

const { Text } = Typography;

interface CardProps {
  nameCard: string;
  children?: React.ReactNode;
}

export function Card({ nameCard, children }: CardProps): JSX.Element {
  const { openModalAdd } = useContext(AddTaskModalContext);

  return (
    <StyledCard>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text strong>{nameCard}</Text>
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: "top",
            cursor: "pointer",
          }}
        />
      </div>
      <div>{children}</div>
    </StyledCard>
  );
}
