import { User } from "@/entities/user/ui/user/User";
import Loader from "@/shared/ui/loader/Loader";
import { useParams } from "react-router";
import React from "react";
import { useUser } from "@/features/user/model/hooks/useUser";

function UserPage() {
  const { id } = useParams();
  if (!id) {
    //TODO: move to constant
    throw new Error(`User id = ${id} not found in URL`);
  }

  const { user, isLoading } = useUser(Number(id));

  if (isLoading) return <Loader />;

  if (!user) {
    //TODO: move to constant
    throw new Error(`User id = ${id} not found`);
  }

  return (
    <React.Fragment>
      <User user={user} />
    </React.Fragment>
  );
}

export default UserPage;
