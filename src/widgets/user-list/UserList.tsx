import styles from "./UserList.module.css";
import React, { useEffect, useState } from "react";
import type { TUser } from "@/entities/user/model/types";
import { User } from "@/entities/user/ui/user/User";
import { usersMock } from "@/entities/user/model/usersMock";

function UserList() {
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
        <React.Fragment key={user.id}>
          <User user={user} />
        </React.Fragment>
      ))}
    </div>
  );
}

export { UserList };
