import { RelayTodos_getTodosQuery } from "@/queries/__generated__/RelayTodos_getTodosQuery.graphql";
import { Container } from "@nextui-org/react";
import { Suspense, useEffect } from "react";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { TodoItem } from "../ui/TodoItem";

const getTodosQuery = graphql`
  query RelayTodos_getTodosQuery {
    todos {
      id
      text
      done
      createdAt
      updatedAt
    }
  }
`;

type GetTodos = RelayTodos_getTodosQuery;

export const RelayTodos = () => {
  const [preload, load] = useQueryLoader<GetTodos>(getTodosQuery);

  useEffect(() => {
    load({});
  }, [load]);

  return preload ? (
    <Suspense fallback={<p>...loading</p>}>
      <RelayTodosLoadable preload={preload} />
    </Suspense>
  ) : null;
};

type TodosLoadableProps = {
  preload: PreloadedQuery<GetTodos>;
};

const RelayTodosLoadable = ({ preload }: TodosLoadableProps) => {
  const { todos } = usePreloadedQuery<GetTodos>(getTodosQuery, preload);

  return (
    <Container display="flex" direction="column" alignItems="center">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Container>
  );
};
