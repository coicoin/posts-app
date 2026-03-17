import { postsMock } from "@/entities/post/model/postsMock";
import type { TPost } from "@/entities/post/model/types";
import { useData } from "@/shared/hooks/useData";
import { useCallback } from "react";
/**
 * @deprecated
 */
function usePost(id: number) {
  const fetchPost = useCallback(() => postsMock.find((p) => p.id === id), [id]);
  const { data: post, isLoading } = useData<TPost | undefined>(fetchPost);

  return { post, isLoading };
}

export { usePost };
