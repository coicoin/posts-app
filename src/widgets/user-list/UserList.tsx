import styles from "./UserList.module.css";
import { useEffect } from "react";
import type { TUser } from "@/entities/user/model/types";
import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { useGetUsersQuery } from "@/entities/user/api/usersApi";
import { setUsers } from "@/entities/user/model/slice/userSlice";
import { Loader } from "@/shared/ui/loader/Loader";
import { lexicon } from "@/shared/lexicon/lexicon";
import { ItemList } from "@/shared/ui/item-list/ItemList";

export function UserList() {
  const dispatch = useDispatch();
  const { data: users = [], isLoading, error } = useGetUsersQuery();

  useEffect(() => {
    dispatch(setUsers(users));
  }, [dispatch, users]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.users}>
      <ItemList
        items={users}
        renderItem={(user: TUser) => (
          <NavLink
            key={user.id}
            to={`/users/${user.id}`}
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
            end={false}
          >
            <div className={styles.user} key={user.id}>
              <img src="/icons/avatar.png" className={styles.avatar} />
              <p className={styles.name}>{user.name}</p>
            </div>
          </NavLink>
        )}
      />
      {error && <div>{lexicon.errors.errorLoadingUsers}</div>}
    </div>
  );
}
