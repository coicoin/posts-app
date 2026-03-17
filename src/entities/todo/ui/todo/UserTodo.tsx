import type { TTodo } from "@/entities/todo/model/types";
import styles from "./UserTodo.module.css";

type UserTodosProps = {
  todo: TTodo;
};

export function UserTodo({ todo }: UserTodosProps) {
  return (
    <article className={styles.todo}>
      <p className={styles.title}>{todo.title}</p>
      <p className={styles.completed}>{todo.completed}</p>
    </article>
  );
}
