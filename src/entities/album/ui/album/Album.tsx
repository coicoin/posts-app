import type { TAlbum } from "@/entities/album/model/types";
import styles from "./Album.module.css";
import { NavLink } from "react-router";

type UserAlbumsProps = {
  album: TAlbum;
};

function Album({ album }: UserAlbumsProps) {
  return (
    <NavLink
      to={`${album.id}/photos`}
      className={({ isActive }) =>
        isActive ? `${styles.active} ${styles.link}` : styles.link
      }
      end={false}
    >
      <article className={styles.album}>
        <p className={styles.title}>{album.title}</p>
      </article>
    </NavLink>
  );
}

export { Album };
