import { UserPhotos } from "@/entities/photos/ui/photo/UserPhoto";
import { usePhotos } from "@/features/album/model/hooks/useUserPhotos";
import Loader from "@/shared/ui/loader/Loader";
import { useParams } from "react-router";

function UserAlbumsPhotosPage() {
  const { id } = useParams();
  if (!id) {
    //TODO: move to constant
    throw new Error(`Album id = ${id} not found in URL`);
  }
  const { photos, isLoading } = usePhotos(Number(id));

  if (isLoading) return <Loader />;

  if (!photos) {
    //TODO: move to constant
    throw new Error(`Photos with albumId = ${id} not found`);
  }

  return <UserPhotos photos={photos} />;
}

export default UserAlbumsPhotosPage;
