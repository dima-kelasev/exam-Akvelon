import React from "react";
import { useTranslation } from "react-i18next";
import { PostsProps } from "../pages/Main";
import { PromotionCard } from "../styles";
import { Loader } from "./Loader";

interface PromotionProps {
  post?: PostsProps;
}

export function Promotion({ post }: PromotionProps): JSX.Element {
  const { t } = useTranslation("common");
  if (!post) return <Loader />;
  return (
    <PromotionCard title={post.title} style={{ width: 900 }}>
      <p>
        {t("modal.promotion")}&nbsp;
        {post.id}
      </p>
      <p>{post.body}</p>
    </PromotionCard>
  );
}
