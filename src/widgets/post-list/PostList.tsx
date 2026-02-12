import type { Post } from "@/entities/post/model/types";
import { PostCard } from "@/entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import React from "react";

type PostCardListProps = {
  posts: Post[];
};

function PostCardList({ posts }: PostCardListProps) {
  return (
    <section className={styles.postCardList}>
      {posts.map((post: Post) => (
        <React.Fragment key={post.id}>
          <PostCard post={post} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default PostCardList;
