import React from "react";
import { StyledCard } from "../styles";
import { Typography } from "antd";

const { Text } = Typography;

interface CardProps {
  nameCard: string;
  children?: React.ReactNode;
}

export function Card({ nameCard, children }: CardProps): JSX.Element {
  return (
    <StyledCard>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text strong>{nameCard}</Text>
      </div>
      <div>{children}</div>
    </StyledCard>
  );
}
