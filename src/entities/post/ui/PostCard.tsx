import type { Post } from "@/entities/post/model/types";
import styles from "./PostCard.module.css";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className={styles.post}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.text}>{post.body}</p>
    </article>
  );
}
