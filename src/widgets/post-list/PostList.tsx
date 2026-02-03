import type { Post } from "../../entities/post/model/types";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";

type PostCardListProps = {
  posts: Post[];
};

function PostCardList({ posts }: PostCardListProps) {
  return (
    <section className={styles.postCardList}>
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostCardList;
