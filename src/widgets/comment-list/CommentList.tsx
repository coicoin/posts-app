import styles from "./CommentList.module.css";
import React, { useCallback, useState } from "react";
import Loader from "@/shared/ui/loader/Loader";
import { Comment } from "@/entities/comments/ui/comment/Comment";
import type { TComment } from "@/entities/comments/model/types";
import {
  useGetCommentsByPostIdCountQuery,
  useGetCommentsByPostIdQuery,
} from "@/entities/comments/api/commentsApi";
import { lexicon } from "@/shared/lexicon/lexicon";

type CommentListProps = {
  postId: number;
};

function CommentList({ postId }: CommentListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: commentsCount = 0 } = useGetCommentsByPostIdCountQuery(postId);
  const {
    data: comments = [],
    isLoading,
    isFetching,
    error,
  } = useGetCommentsByPostIdQuery(postId, { skip: !isOpen });

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <React.Fragment>
      <div className={styles.commentsButton} onClick={handleClick}>
        <p className={styles.commentsTitle}>
          <span className={styles.commentsCount}>{commentsCount}</span> Comments
        </p>
        <span
          className={
            isOpen
              ? `${styles.commentsArrow} ${styles.open}`
              : `${styles.commentsArrow}`
          }
        >
          {isFetching ? <Loader size={20} /> : ">"}
        </span>
      </div>
      {isOpen && !isLoading && comments.length > 0 && (
        <div className={styles.commentList}>
          {comments.map((comment: TComment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
      {isOpen && !isLoading && comments.length == 0 && (
        <div className={styles.commentList}>No comments</div>
      )}
      {error && <div>{lexicon.errors.errorLoadingComments}</div>}
    </React.Fragment>
  );
}

export { CommentList };
