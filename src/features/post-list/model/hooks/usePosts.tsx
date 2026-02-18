import { postsMock } from "@/entities/post/model/postsMock";
import type { TPost } from "@/entities/post/model/types";
import type { WithLoadingProps } from "@/shared/lib/hoc/withLoading";
import { useEffect, useState } from "react";

function usePosts({ setLoading }: Omit<WithLoadingProps, "loading">) {
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

  return posts;
}

export { usePosts };
