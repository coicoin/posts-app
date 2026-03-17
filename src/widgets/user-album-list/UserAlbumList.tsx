import styles from "./UserAlbumList.module.css";
import React from "react";
import type { TAlbum } from "@/entities/album/model/types";
import { useGetAlbumsByUserIdQuery } from "@/entities/album/api/albumsApi";
import { ID } from "@/shared/constants/constants";
import { useNumericParam } from "@/shared/hooks/useNumericParam";
import { lexicon } from "@/shared/lexicon/lexicon";
import { ItemList } from "@/shared/ui/item-list/ItemList";
import { Loader } from "@/shared/ui/loader/Loader";
import { skipToken } from "@reduxjs/toolkit/query";
import { Album } from "@/entities/album/ui/album/Album";

function UserAlbumList() {
  const userId: number | undefined = useNumericParam(ID);

  const {
    data: albums,
    isLoading,
    error,
  } = useGetAlbumsByUserIdQuery(userId ?? skipToken);

  if (!userId) {
    return <div>{lexicon.errors.paramNotFound(userId)}</div>;
  }
  if (isLoading) return <Loader />;

  if (!albums) {
    return <div>{lexicon.errors.albumsNotFoundByUserId(userId)}</div>;
  }

  if (error) {
    return <div>{lexicon.errors.errorLoadingTodos}</div>;
  }

  return (
    <React.Fragment>
      <h1 className={styles.heading}>{lexicon.titles.albums}</h1>
      <ItemList
        items={albums}
        renderItem={(album: TAlbum) => <Album key={album.id} album={album} />}
      />
    </React.Fragment>
  );
}

export { UserAlbumList };
