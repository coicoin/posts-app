import styles from "./UserTodoList.module.css";
import React from "react";
import type { TTodo } from "@/entities/todo/model/types";
import { ItemList } from "@/shared/ui/item-list/ItemList";
import { lexicon } from "@/shared/lexicon/lexicon";
import { UserTodo } from "@/entities/todo/ui/todo/UserTodo";
import { Loader } from "@/shared/ui/loader/Loader";
import { useGetTodosByUserIdQuery } from "@/entities/todo/api/todosApi";
import { useNumericParam } from "@/shared/hooks/useNumericParam";
import { skipToken } from "@reduxjs/toolkit/query";
import { ID } from "@/shared/constants/constants";

function UserTodoList() {
  const userId: number | undefined = useNumericParam(ID);

  const {
    data: todos,
    isLoading,
    error,
  } = useGetTodosByUserIdQuery(userId ?? skipToken);

  if (!userId) {
    return <div>{lexicon.errors.paramNotFound(userId)}</div>;
  }

  if (isLoading) return <Loader />;

  if (!todos) {
    return <div>{lexicon.errors.todosNotFoundByUserId(userId)}</div>;
  }

  if (error) {
    return <div>{lexicon.errors.errorLoadingTodos}</div>;
  }

  return (
    <React.Fragment>
      <h1 className={styles.heading}>{lexicon.titles.todos}</h1>
      <ItemList
        items={todos}
        renderItem={(todo: TTodo) => <UserTodo key={todo.id} todo={todo} />}
      />
    </React.Fragment>
  );
}

export { UserTodoList };
