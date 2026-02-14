import type { TComment } from "@/entities/post/model/types";
import styles from "./Comment.module.css";

type CommentProps = {
  comment: TComment;
};

export function Comment({ comment }: CommentProps) {
  return (
    <article className={styles.comment}>
      <img src="/icons/avatar.png" className={styles.avatar} />
      <div className={styles.commentContent}>
        <p className={styles.email}><a href={`mailto:${comment.email}`}>{comment.email}</a></p>
        <p className={styles.body}>{comment.body}</p>
      </div>
    </article>
  );
}
