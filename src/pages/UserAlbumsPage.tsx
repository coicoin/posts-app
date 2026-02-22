import { UserAlbums } from "@/entities/album/ui/album/UserAlbums";
import { useUserAlbum } from "@/features/user/model/hooks/useUserAlbum";
import Loader from "@/shared/ui/loader/Loader";
import { useParams } from "react-router";

function UserAlbumsPage() {
  const { id } = useParams();
  if (!id) {
    //TODO: move to constant
    throw new Error(`User id = ${id} not found in URL`);
  }

  const { albums, isLoading } = useUserAlbum(Number(id));

  if (isLoading) return <Loader />;

  if (!albums) {
    //TODO: move to constant
    throw new Error(`Albums with userId = ${id} not found`);
  }

  return <UserAlbums albums={albums} />;
}
export default UserAlbumsPage;
