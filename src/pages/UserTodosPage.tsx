import { UserTodo } from "@/entities/todo/ui/todo/UserTodo";
import { useUserTodos } from "@/features/user/model/hooks/useUserTodos";
import Loader from "@/shared/ui/loader/Loader";
import { useParams } from "react-router";

function UserTodosPage() {
  const { id } = useParams();
  if (!id) {
    //TODO: move to constant
    throw new Error(`User id = ${id} not found in URL`);
  }

  const { todos, isLoading } = useUserTodos(Number(id));

  if (isLoading) return <Loader />;

  if (!todos) {
    //TODO: move to constant
    throw new Error(`Todos with userId = ${id} not found`);
  }

  return <UserTodo todos={todos} />;
}
export default UserTodosPage;
