import styles from "./UserPostList.module.css";
import React from "react";
import type { TPost } from "@/entities/post/model/types";
import { PostCard } from "@/entities/post/ui/post/PostCard";
import { Loader } from "@/shared/ui/loader/Loader";
import { ItemList } from "@/shared/ui/item-list/ItemList";
import { useGetPostsByUserIdQuery } from "@/entities/post/api/postsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { lexicon } from "@/shared/lexicon/lexicon";
import { useNumericParam } from "@/shared/hooks/useNumericParam";
import { ID } from "@/shared/constants/constants";

function UserPostList() {
  const userId: number | undefined = useNumericParam(ID);

  const {
    data: posts,
    isLoading,
    error,
  } = useGetPostsByUserIdQuery(userId ?? skipToken);

  if (!userId) {
    return <div>{lexicon.errors.paramNotFound(userId)}</div>;
  }

  if (isLoading) return <Loader />;

  if (!posts) {
    return <div>{lexicon.errors.postNotFoundByUserId(userId)}</div>;
  }

  return (
    <React.Fragment>
      <h1 className={styles.heading}>{lexicon.titles.posts}</h1>
      <section className={styles.postList}>
        <ItemList
          items={posts}
          renderItem={(post: TPost) => <PostCard key={post.id} post={post} />}
        />
      </section>
      {error && <div>{lexicon.errors.errorLoadingUser}</div>}
    </React.Fragment>
  );
}

export { UserPostList };
