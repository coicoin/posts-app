import { useGetAlbumsByUserIdQuery } from "@/entities/album/api/albumsApi";
import { UserAlbums } from "@/entities/album/ui/album/UserAlbums";
import { lexicon } from "@/shared/lexicon/lexicon";
import Loader from "@/shared/ui/loader/Loader";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router";

function UserAlbumsPage() {
  const { id } = useParams();
  const userId = id ? Number(id) : undefined;

  const {
    data: albums,
    isLoading,
    error,
  } = useGetAlbumsByUserIdQuery(userId ?? skipToken);

  if (!userId) {
    return <div>{lexicon.errors.userIdNotFound(id)}</div>;
  }
  if (isLoading) return <Loader />;

  if (!albums) {
    return <div>{lexicon.errors.albumsNotFoundByUserId(id)}</div>;
  }

  if (error) {
    return <div>{lexicon.errors.errorLoadingTodos}</div>;
  }

  return <UserAlbums albums={albums} />;
}
export { UserAlbumsPage };
