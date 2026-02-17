import type { TAlbum } from "@/entities/album/model/types";
import styles from "./UserAlbum.module.css";

type UserAlbumsProps = {
  albums: TAlbum[];
};

export function UserAlbums({ albums }: UserAlbumsProps) {
  return (
    <>
      {albums.map((album) => (
        <article key={album.id} className={styles.album}>
          <p className={styles.title}>{album.title}</p>
        </article>
      ))}
    </>
  );
}
