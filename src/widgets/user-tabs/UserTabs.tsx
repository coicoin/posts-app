import styles from "./UserTabs.module.css";
import { lexicon } from "@/shared/lexicon/lexicon";
import { NavLink } from "react-router";

const UserTabs = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="albums"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {lexicon.buttons.albums}
      </NavLink>
      <NavLink
        to="todos"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {lexicon.buttons.tasks}
      </NavLink>
      <NavLink
        to="posts"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {lexicon.buttons.posts}
      </NavLink>
    </nav>
  );
};

export { UserTabs };
