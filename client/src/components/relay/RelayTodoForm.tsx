import { RelayTodoForm_createTodoMutation } from "@/queries/__generated__/RelayTodoForm_createTodoMutation.graphql";
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
    <Card css={{ maxWidth: "600px" }}>
      <Card.Header>Todo Form</Card.Header>
      <Card.Divider />
      <Card.Body>
        <Input
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
