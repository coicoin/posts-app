import styles from "./CommentList.module.css";
import React, { useCallback, useEffect, useState } from "react";
import withLoading, {
  type WithLoadingProps,
} from "@/shared/lib/hoc/withLoading";
import Loader from "@/shared/ui/loader/Loader";
import { Comment } from "@/entities/comments/ui/comment/Comment";
import { commentsMock } from "@/entities/comments/model/commentsMock";
import type { TComment } from "@/entities/comments/model/types";

type CommentListProps = {
  postId: number;
};

function CommentList({
  loading,
  setLoading,
  postId,
}: CommentListProps & WithLoadingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comments, setComments] = useState<TComment[]>([]);
  const [commentsCount, setCommentsCount] = useState<number>();

  useEffect(() => {
    //TODO: change to call commentsApi
    const timeout = setTimeout(() => {
      const data = commentsMock.filter((comment) => comment.postId === postId);
      setCommentsCount(data.length ?? 0);
      return () => clearTimeout(timeout);
    }, 0);
  }, [postId]);

  const handleClick = useCallback(() => {
    if (isLoaded) {
      setIsOpen((prev) => !prev);
      return;
    }
    setLoading(true);

    //TODO: change to call commentsApi
    setTimeout(() => {
      const data: TComment[] = commentsMock.filter(
        (comment) => comment.postId === postId,
      );
      setComments(data);
      setIsLoaded(true);
      setIsOpen(true);
      setLoading(false);
    }, 1000);
  }, [isLoaded, postId, setLoading]);

  return (
    <React.Fragment>
      <div className={styles.commentsButton} onClick={handleClick}>
        <p className={styles.commentsTitle}>
          <span className={styles.commentsCount}>{commentsCount}</span>
          Comments
        </p>
        <span
          className={
            isOpen
              ? `${styles.commentsArrow} ${styles.open}`
              : `${styles.commentsArrow}`
          }
        >
          {loading ? <Loader size={20} /> : ">"}
        </span>
      </div>
      {isOpen && isLoaded && comments.length > 0 && (
        <div className={styles.commentList}>
          {comments.map((comment: TComment) => (
            <React.Fragment key={comment.id}>
              <Comment comment={comment} />
            </React.Fragment>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

const CommentListWithLoading = withLoading(CommentList);
export default CommentListWithLoading;
