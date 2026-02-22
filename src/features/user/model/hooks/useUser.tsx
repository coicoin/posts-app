import type { TUser } from "@/entities/user/model/types";
import { usersMock } from "@/entities/user/model/usersMock";
import { useEffect, useState } from "react";

function useUser(id: number) {
  const [user, setUser] = useState<TUser>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //TODO: change to call userApi
    const timeout = setTimeout(() => {
      const data = usersMock.find((user) => user.id === id);
      setUser(data);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [id]);

  return { user, isLoading };
}

export { useUser };
