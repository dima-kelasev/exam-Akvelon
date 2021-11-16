import React from "react";
import { PostsProps } from "../pages/Main";
import { PromotionCard } from "../styles";
import { Loader } from "./Loader";

interface PromotionProps {
  post?: PostsProps;
}

export function Promotion({ post }: PromotionProps): JSX.Element {
  if (!post) return <Loader />;
  return (
    <PromotionCard title={post.title} style={{ width: 900 }}>
      <p>Post number {post.id}</p>
      <p>{post.body}</p>
    </PromotionCard>
  );
}
