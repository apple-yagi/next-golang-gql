import type { NextPage } from "next";
import { RelayEnvironmentProvider } from "react-relay";
import { RelayTodos } from "../components/relay/RelayTodos";
import environment from "@/enviroment";
import { RelayTodoForm } from "@/components/relay/RelayTodoForm";
import { Container, Spacer } from "@nextui-org/react";

const Relay: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Container display="flex" direction="column" alignItems="center">
        <RelayTodoForm />
        <Spacer y={4} />
        <RelayTodos />
      </Container>
    </RelayEnvironmentProvider>
  );
};

export default Relay;
