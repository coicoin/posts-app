import type { TPost } from "@/entities/post/model/types";
import { PostCard } from "@/entities/post/ui/post/PostCard";
import styles from "./PostList.module.css";
import React, { useEffect, useMemo, useState } from "react";
import withLoading, {
  type WithLoadingProps,
} from "@/shared/lib/hoc/withLoading";
import Loader from "@/shared/ui/loader/Loader";
import PostLengthFilter from "@/features/post-length-filter/ui/PostLengthFilter";
import { postsMock } from "@/entities/post/model/postsMock";
import filterByLength from "@/features/post-length-filter/lib/filterByLength";

function PostList({ loading, setLoading }: WithLoadingProps) {
  const [length, setLength] = useState(0);
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    setLoading(true);
    //TODO: change to call postApi
    const timeout = setTimeout(() => {
      const data = postsMock;
      setPosts(data);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [setLoading]);

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, length);
  }, [posts, length]);

  return (
    <section className={styles.postList}>
      <div className={styles.lengthFilterWrapper}>
        <p className={styles.lengthFilterTitle}>Filter by title length</p>
        <PostLengthFilter onChange={setLength} />
      </div>
      {loading 
      ? (
        <Loader />
      ) 
      : (
        filteredPosts.map((post: TPost) => (
          <React.Fragment key={post.id}>
            <PostCard post={post} />
          </React.Fragment>
        ))
      )}
    </section>
  );
}

const PostListWithLoading = withLoading(PostList);
export default PostListWithLoading;
