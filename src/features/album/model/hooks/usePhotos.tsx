import { photosMock } from "@/entities/photos/model/photosMock";
import type { TPhoto } from "@/entities/photos/model/types";
import { useData } from "@/shared/hooks/useData";
import { useCallback } from "react";

function usePhotos(albumId: number) {
  const fetchPhotos = useCallback(
    () => photosMock.filter((todos) => todos.albumId === albumId),
    [albumId],
  );
  const { data: photos, isLoading } = useData<TPhoto[] | undefined>(
    fetchPhotos,
  );

  return { photos, isLoading };
}

export { usePhotos };
