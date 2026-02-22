import type { TAlbum } from "@/entities/album/model/types";
import styles from "./UserAlbum.module.css";
import { NavLink } from "react-router";

type UserAlbumsProps = {
  albums: TAlbum[];
};

export function UserAlbums({ albums }: UserAlbumsProps) {
  return (
    <>
      <h1>Albums</h1>
      {albums.map((album) => (
        <NavLink
          key={album.id}
          to={`${album.id}/photos`}
          className={
            ({ isActive }) => (
              isActive 
                ? `${styles.active} ${styles.link}`
                : styles.link
              )}
          end={false}
        >
        <article key={album.id} className={styles.album}>
          <p className={styles.title}>{album.title}</p>
        </article>
        </NavLink>
      ))}
    </>
  );
}
