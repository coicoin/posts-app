import { User } from "@/entities/user/ui/user/User";
import Loader from "@/shared/ui/loader/Loader";
import { useParams } from "react-router";
import React from "react";
import { useGetUserByIdQuery } from "@/entities/user/api/usersApi";
import { lexicon } from "@/shared/lexicon/lexicon";
import { skipToken } from "@reduxjs/toolkit/query";

function UserPage() {
  const { id } = useParams();
  const userId = id ? Number(id) : undefined;

  const {
    data: user,
    isLoading,
    error,
  } = useGetUserByIdQuery(userId ?? skipToken);

  if (!userId) {
    return <div>{lexicon.errors.userIdNotFound(id)}</div>;
  }

  if (isLoading) return <Loader />;

  if (!user) {
    return <div>{lexicon.errors.userNotFoundById(id)}</div>;
  }

  return (
    <React.Fragment>
      {user && <User user={user} />}
      {error && <div>{lexicon.errors.errorLoadingUser}</div>}
    </React.Fragment>
  );
}

export { UserPage };
