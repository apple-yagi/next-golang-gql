import { Todos_getTodosQuery } from "@/queries/__generated__/Todos_getTodosQuery.graphql";
import { Suspense, useEffect } from "react";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";

const getTodosQuery = graphql`
  query Todos_getTodosQuery {
    todos {
      id
      text
      done
      createdAt
      updatedAt
    }
  }
`;

type GetTodos = Todos_getTodosQuery;

export const Todos = () => {
  const [preload, load] = useQueryLoader<GetTodos>(getTodosQuery);

  useEffect(() => {
    load({});
  }, [load]);

  return preload ? (
    <Suspense fallback={<p>...loading</p>}>
      <TodosLoadable preload={preload} />
    </Suspense>
  ) : null;
};

type TodosLoadableProps = {
  preload: PreloadedQuery<GetTodos>;
};

const TodosLoadable = ({ preload }: TodosLoadableProps) => {
  const { todos } = usePreloadedQuery<GetTodos>(getTodosQuery, preload);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
