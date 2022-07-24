import { Container } from "@nextui-org/react";
import { graphql, useFragment } from "react-relay";
import { TodoItem } from "../ui/TodoItem";
import type { RelayTodos_todos$key } from "@/queries/__generated__/relay/RelayTodos_todos.graphql";
import { RelayContainer_Query$data } from "@/queries/__generated__/relay/RelayContainer_Query.graphql";

type Props = {
  query: RelayContainer_Query$data;
};

export const RelayTodos = ({ query }: Props) => {
  const { todos } = useFragment<RelayTodos_todos$key>(
    graphql`
      fragment RelayTodos_todos on Query {
        todos {
          id
          text
          updatedAt
        }
      }
    `,
    query
  );

  return (
    <Container display="flex" direction="column" alignItems="center">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Container>
  );
};
