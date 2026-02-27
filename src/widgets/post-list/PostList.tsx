import styles from "./PostList.module.css";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TPost } from "@/entities/post/model/types";
import type { RootState } from "@/app/providers/store/store";
import { PostCard } from "@/entities/post/ui/post/PostCard";
import { Loader } from "@/shared/ui/loader/Loader";
import { PostLengthFilter } from "@/features/post-length-filter/ui/PostLengthFilter";
import { filterByLength } from "@/features/post-length-filter/lib/filterByLength";
import { useGetPostsQuery } from "@/entities/post/api/postsApi";
import { lexicon } from "@/shared/lexicon/lexicon";
import { setPosts } from "@/entities/post/model/slice/postSlice";
import { ItemList } from "@/shared/ui/item-list/ItemList";

function PostList() {
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();
  const { data: posts = [], isLoading, error } = useGetPostsQuery();
  const postsCount = useSelector((state: RootState) => state.post.count);

  useEffect(() => {
    dispatch(setPosts(posts));
  }, [dispatch, posts]);

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, length).slice();
  }, [posts, length]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={styles.postList}>
      <div className={styles.lengthFilterWrapper}>
        <div>{lexicon.titles.postsCount(postsCount, filteredPosts.length)}</div>
        <PostLengthFilter onChange={setLength} />
      </div>
      <ItemList
        items={filteredPosts}
        renderItem={(post: TPost) => <PostCard key={post.id} post={post} />}
      />
      {error && <div>{lexicon.errors.errorLoadingPosts}</div>}
    </section>
  );
}

export { PostList };
