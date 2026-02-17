import { albumsMock } from "@/entities/album/model/albumsMock";
import type { TAlbum } from "@/entities/album/model/types";
import { useEffect, useState } from "react";

function useAlbum(id: number) {
  const [albums, setAlbums] = useState<TAlbum[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //TODO: change to call postApi
    const timeout = setTimeout(() => {
      const data = albumsMock.filter((album) => album.userId === id);
      setAlbums(data);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [id]);

  return { albums, isLoading };
}

export { useAlbum };
