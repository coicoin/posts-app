import type { TPhoto } from "@/entities/photos/model/types";
import styles from "./UserPhoto.module.css";

type UserPhotosProps = {
  photos: TPhoto[];
};

export function UserPhotos({ photos }: UserPhotosProps) {
  return (
    <>
      <h1>Photo</h1>
      {photos.map((photo) => (
        <article key={photo.id} className={styles.photoContent}>
          <p className={styles.title}>{photo.title}</p>
          <img
            src="https://cdn.stocksnap.io/img-thumbs/960w/sunlight-sunny_5SB1IJ2O5M.jpg"
            alt="Photo"
            className={styles.picture}
          ></img>
        </article>
      ))}
    </>
  );
}
