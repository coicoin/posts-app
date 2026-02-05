import { postsMock } from "@/entities/post/model/postsMock";
import MainLayout from "@/shared/layouts/MainLayout";
import PostCardList from "@/widgets/post-list/PostList";

function PostPage() {
  return (
    <MainLayout>
      <PostCardList posts={postsMock} />
    </MainLayout>
  );
}

export default PostPage;
