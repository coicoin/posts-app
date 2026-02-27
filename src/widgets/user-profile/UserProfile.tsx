import React from "react";
import { User } from "@/entities/user/ui/user/User";
import { Loader } from "@/shared/ui/loader/Loader";
import { useGetUserByIdQuery } from "@/entities/user/api/usersApi";
import { lexicon } from "@/shared/lexicon/lexicon";
import { skipToken } from "@reduxjs/toolkit/query";
import { useNumericParam } from "@/shared/hooks/useNumericParam";
import { ID } from "@/shared/constants/constants";

function UserProfile() {
  const id: number | undefined = useNumericParam(ID);
  const { data: user, isLoading, error } = useGetUserByIdQuery(id ?? skipToken);

  if (!id) {
    return <div>{lexicon.errors.paramNotFound(id)}</div>;
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

export { UserProfile };
