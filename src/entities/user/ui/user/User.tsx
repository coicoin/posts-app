import { useNavigate } from "react-router";
import styles from "./User.module.css";
import type { TUser } from "@/entities/user/model/types";

type UserProps = {
  user: TUser;
};

export function User({ user }: UserProps) {
  const navigate = useNavigate();
  return (
    <article className={styles.user}>
      <img src="/icons/avatar.png" className={styles.avatar} onClick={() => navigate(`${user.id}`)}/>
      <div className={styles.userContent}>
        <p className={styles.username}>{user.username}</p>
        <p className={styles.email}>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
      </div>
    </article>
  );
}
