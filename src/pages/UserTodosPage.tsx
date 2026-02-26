import { useGetTodosByUserIdQuery } from "@/entities/todo/api/todosApi";
import { UserTodo } from "@/entities/todo/ui/todo/UserTodo";
import { lexicon } from "@/shared/lexicon/lexicon";
import Loader from "@/shared/ui/loader/Loader";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router";

function UserTodosPage() {
  const { id } = useParams();
  const userId = id ? Number(id) : undefined;

  const {
    data: todos,
    isLoading,
    error,
  } = useGetTodosByUserIdQuery(userId ?? skipToken);

  if (!userId) {
    return <div>{lexicon.errors.userIdNotFound(id)}</div>;
  }

  if (isLoading) return <Loader />;

  if (!todos) {
    return <div>{lexicon.errors.todosNotFoundByUserId(id)}</div>;
  }

  if (error) {
    return <div>{lexicon.errors.errorLoadingTodos}</div>;
  }

  return <UserTodo todos={todos} />;
}
export { UserTodosPage };
