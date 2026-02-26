import { albumsMock } from "@/entities/album/model/albumsMock";
import type { TAlbum } from "@/entities/album/model/types";
import { useEffect, useState } from "react";

function useUserAlbum(userId: number) {
  const [albums, setAlbums] = useState<TAlbum[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //TODO: change to call postApi
    const timeout = setTimeout(() => {
      const data = albumsMock.filter((album) => album.userId === userId);
      setAlbums(data);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [userId, setLoading]);

  return { albums, isLoading };
}

export { useUserAlbum };
