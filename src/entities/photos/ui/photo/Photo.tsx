import type { SyntheticEvent } from "react";
import styles from "./Photo.module.css";
import type { TPhoto } from "@/entities/photos/model/types";

type UserPhotosProps = {
  photo: TPhoto;
};

function Photo({ photo }: UserPhotosProps) {
  return (
    <article className={styles.photoContent}>
      <p className={styles.title}>{photo.title}</p>
      <img
        src={photo.url}
        alt="Photo"
        className={styles.picture}
        onError={(event: SyntheticEvent<HTMLImageElement>) => {
          event.currentTarget.src =
            "https://cdn.stocksnap.io/img-thumbs/960w/sunlight-sunny_5SB1IJ2O5M.jpg";
        }}
      ></img>
    </article>
  );
}

export { Photo };
