import { RelayTodoForm_createTodoMutation } from "@/queries/__generated__/relay/RelayTodoForm_createTodoMutation.graphql";
import { Button, Card, Input, Spacer } from "@nextui-org/react";
import { useState } from "react";
import { useMutation } from "react-relay";
import { graphql } from "relay-runtime";

const createTodoMutation = graphql`
  mutation RelayTodoForm_createTodoMutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      text
      done
      createdAt
      updatedAt
    }
  }
`;

export const RelayTodoForm = () => {
  const [commitMutation, isMutationInFlight] =
    useMutation<RelayTodoForm_createTodoMutation>(createTodoMutation);

  const [text, setText] = useState("");

  return (
    <Card aria-label="todo-form" css={{ maxWidth: "600px" }}>
      <Card.Header aria-label="todo-header">Todo Form</Card.Header>
      <Card.Divider aria-label="todo-divider" />
      <Card.Body aria-label="todo-body">
        <Input
          aria-label="todo-input"
          clearable
          underlined
          placeholder="task name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Spacer />
        <Button
          onClick={() =>
            commitMutation({
              variables: {
                input: { text },
              },
              updater: (store) => {
                const payload = store.getRootField("createTodo");
                console.log(payload);
              },
            })
          }
          css={{ maxWidth: "200px", marginInline: "auto" }}
          disabled={isMutationInFlight}
        >
          Register
        </Button>
      </Card.Body>
    </Card>
  );
};
