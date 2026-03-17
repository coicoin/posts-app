import styles from "./PhotoList.module.css";
import type { TPhoto } from "@/entities/photos/model/types";
import { useGetPhotosByAlbumIdQuery } from "@/entities/photos/api/photosApi";
import { Photo } from "@/entities/photos/ui/photo/Photo";
import { useNumericParam } from "@/shared/hooks/useNumericParam";
import { lexicon } from "@/shared/lexicon/lexicon";
import { ItemList } from "@/shared/ui/item-list/ItemList";
import { skipToken } from "@reduxjs/toolkit/query";
import { ID } from "@/shared/constants/constants";
import { Loader } from "@/shared/ui/loader/Loader";
import React from "react";

function PhotoList() {
  const albumId: number | undefined = useNumericParam(ID);

  const {
    data: photos,
    isLoading,
    error,
  } = useGetPhotosByAlbumIdQuery(albumId ?? skipToken);

  if (!albumId) {
    return <div>{lexicon.errors.paramNotFound(albumId)}</div>;
  }

  if (isLoading) return <Loader />;

  if (!photos) {
    return <div>{lexicon.errors.photosNotFoundByPhotosId(albumId)}</div>;
  }

  if (error) {
    return <div>{lexicon.errors.errorLoadingTodos}</div>;
  }

  return (
    <React.Fragment>
      <h1 className={styles.heading}>{lexicon.titles.photo}</h1>
      <ItemList
        items={photos}
        renderItem={(photo: TPhoto) => <Photo key={photo.id} photo={photo} />}
      />
    </React.Fragment>
  );
}

export { PhotoList };
