import { photosMock } from "@/entities/photos/model/photosMock";
import type { TPhoto } from "@/entities/photos/model/types";
import { useEffect, useState } from "react";

function usePhotos(albumId: number) {
  const [photos, setPhotos] = useState<TPhoto[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //TODO: change to call photoApi
    const timeout = setTimeout(() => {
      const data = photosMock.filter((todos) => todos.albumId === albumId);
      setPhotos(data);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [albumId, setLoading]);

  return { photos, isLoading };
}

export { usePhotos };
