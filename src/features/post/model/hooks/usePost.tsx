import { postsMock } from "@/entities/post/model/postsMock";
import type { TPost } from "@/entities/post/model/types";
import { useEffect, useState } from "react";

function usePost(id: number) {
  const [post, setPost] = useState<TPost>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //TODO: change to call postApi
    const timeout = setTimeout(() => {
      const data = postsMock.find((post) => post.id === id);
      setPost(data);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [id]);

  return { post, isLoading };
}

export { usePost };
