import { UserTabs } from "@/widgets/user-tabs/UserTabs";
import React from "react";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <React.Fragment>
      <UserTabs />
      <Outlet />
    </React.Fragment>
  );
};

export default UserLayout;
