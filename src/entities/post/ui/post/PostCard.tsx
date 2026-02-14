import type { TPost } from "@/entities/post/model/types";
import styles from "./PostCard.module.css";
import CommentListWithLoading from "@/widgets/comment-list/CommentList";

type PostCardProps = {
  post: TPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className={styles.post}>
      <div className={styles.postContent}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.text}>{post.body}</p>
      </div>
      <CommentListWithLoading postId={post.id} />
    </article>
  );
}
