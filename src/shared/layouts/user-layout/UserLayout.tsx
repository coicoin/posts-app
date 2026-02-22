import { UserList } from "@/widgets/user-list/UserList";
import styles from "./UserLayout.module.css";
import { UserTabs } from "@/widgets/user-tabs/UserTabs";
import React from "react";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <React.Fragment>
      <UserTabs />
      <section className={styles.layout}>
        <aside className={styles.sidebar}>
          <UserList />
        </aside>
        <section className={styles.content}>
          <Outlet />
        </section>
      </section>
    </React.Fragment>
  );
};

export default UserLayout;
