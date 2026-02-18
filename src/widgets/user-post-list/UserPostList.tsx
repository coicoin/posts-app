import type { TPost } from "@/entities/post/model/types";
import { PostCard } from "@/entities/post/ui/post/PostCard";
import styles from "./UserPostList.module.css";
import withLoading, {
  type WithLoadingProps,
} from "@/shared/lib/hoc/withLoading";
import Loader from "@/shared/ui/loader/Loader";
import { useParams } from "react-router";
import { useUserPosts } from "@/features/user/model/hooks/useUserPosts";
import React from "react";

function UserPostList({ loading, setLoading }: WithLoadingProps) {
  const { id } = useParams();
  if (!id) throw new Error(`User id = ${id} not found in URL`);

  const { posts } = useUserPosts(Number(id), { setLoading });

  if (loading) return <Loader />;

  if (!posts) {
    throw new Error(`Posts with userId = ${id} not found`);
  }

  return (
    <React.Fragment>
      <h1>Posts</h1>
      <section className={styles.postList}>
        {posts.map((post: TPost) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </React.Fragment>
  );
}

const UserPostListWithLoading = withLoading(UserPostList);
export default UserPostListWithLoading;
