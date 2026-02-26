import type { TPost } from "@/entities/post/model/types";
import styles from "./PostCard.module.css";
import { useNavigate } from "react-router";
import { CommentList } from "@/widgets/comment-list/CommentList";

type PostCardProps = {
  post: TPost;
};

export function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate();
  return (
    <article className={styles.post}>
      <div className={styles.postContent} onClick={() => navigate(`/posts/${post.id}`)}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.text}>{post.body}</p>
      </div>
      <CommentList postId={post.id} />
    </article>
  );
}
