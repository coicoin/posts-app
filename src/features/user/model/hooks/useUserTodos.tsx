
import { todosMock } from "@/entities/todo/model/todosMock";
import type { TTodo } from "@/entities/todo/model/types";
import { useEffect, useState } from "react";

function useUserTodos(userId: number) {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //TODO: change to call postApi
    const timeout = setTimeout(() => {
      const data = todosMock.filter((todos) => todos.userId === userId);
      setTodos(data);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [userId, setLoading]);

  return { todos, isLoading };
}

export { useUserTodos };
