import styles from "./MainNavigation.module.css";
import { lexicon } from "@/shared/lexicon/lexicon";
import { NavLink } from "react-router";

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {lexicon.buttons.main}
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {lexicon.buttons.posts}
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {lexicon.buttons.users}
      </NavLink>
    </nav>
  );
};

export { MainNavigation };
