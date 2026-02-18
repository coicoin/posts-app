import styles from "./UserList.module.css";
import { useEffect, useState } from "react";
import type { TUser } from "@/entities/user/model/types";
import { usersMock } from "@/entities/user/model/usersMock";
import { NavLink } from "react-router";

export function UserList() {
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const data: TUser[] = usersMock;
      setUsers(data);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.users}>
      {users.map((user: TUser) => (
        <NavLink
          key={user.id}
          to={`/users/${user.id}`}
          className={
            ({ isActive }) => (
              isActive 
                ? `${styles.active} ${styles.link}`
                : styles.link
              )}
          end={false}
        >
          <div className={styles.user} key={user.id}>
            <img src="/icons/avatar.png" className={styles.avatar} />
            <p className={styles.name}>{user.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
