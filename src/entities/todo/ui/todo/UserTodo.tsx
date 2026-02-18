import type { TTodo } from "@/entities/todo/model/types";
import styles from "./UserTodo.module.css";

type UserTodosProps = {
  todos: TTodo[];
};

export function UserTodo({ todos }: UserTodosProps) {
  return (
    <>
      <h1>Tasks</h1>
      {todos.map((todo) => (
        <article key={todo.id} className={styles.todo}>
          <p className={styles.title}>{todo.title}</p>
          <p className={styles.completed}>{todo.completed}</p>
        </article>
      ))}
    </>
  );
}
