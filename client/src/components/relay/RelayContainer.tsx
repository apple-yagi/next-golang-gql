import { RelayContainer_Query } from "@/queries/__generated__/relay/RelayContainer_Query.graphql";
import { Container, Spacer } from "@nextui-org/react";
import { Suspense } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { RelayTodoForm } from "./RelayTodoForm";
import { RelayTodos } from "./RelayTodos";

export const RelayContainer = () => {
  const query = useLazyLoadQuery<RelayContainer_Query>(
    graphql`
      query RelayContainer_Query {
        ...RelayTodos_todos
      }
    `,
    {}
  );

  return (
    <Suspense fallback={<p>...loading</p>}>
      <Container display="flex" direction="column" alignItems="center">
        <RelayTodoForm />
        <Spacer y={4} />
        <RelayTodos query={query} />
      </Container>
    </Suspense>
  );
};
