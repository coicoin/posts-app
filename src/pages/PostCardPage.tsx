import { PostCard } from "@/entities/post/ui/post/PostCard";
import { usePost } from "@/features/post/model/hooks/usePost";
import Loader from "@/shared/ui/loader/Loader";
import { useParams } from "react-router";

function PostCardPage() {
  const { id } = useParams();
  if (!id) {
    //TODO: move to constant
    throw new Error(`Post id = ${id} not found in URL`);
  }

  const { post, isLoading } = usePost(Number(id));

  if (isLoading) return <Loader />;

  if (!post) {
    //TODO: move to constant
    throw new Error(`Post id = ${id} not found`);
  }

  return <PostCard post={post} />;
}
export default PostCardPage;
