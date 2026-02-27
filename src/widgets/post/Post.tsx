import { useGetPostByIdQuery } from "@/entities/post/api/postsApi";
import { PostCard } from "@/entities/post/ui/post/PostCard";
import { ID } from "@/shared/constants/constants";
import { useNumericParam } from "@/shared/hooks/useNumericParam";
import { lexicon } from "@/shared/lexicon/lexicon";
import { Loader } from "@/shared/ui/loader/Loader";
import { skipToken } from "@reduxjs/toolkit/query";

function Post() {
  const postId: number | undefined = useNumericParam(ID);

  const {
    data: post,
    isLoading,
    error,
  } = useGetPostByIdQuery(postId ?? skipToken);

  if (!postId) {
    return <div>{lexicon.errors.paramNotFound(postId)}</div>;
  }

  if (isLoading) return <Loader />;

  if (!post) {
    return <div>{lexicon.errors.postNotFoundById(postId)}</div>;
  }

  if (error) {
    return <div>{lexicon.errors.errorLoadingTodos}</div>;
  }

  return <PostCard post={post} />;
}

export { Post };
