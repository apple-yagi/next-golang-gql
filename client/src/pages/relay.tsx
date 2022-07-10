import type { NextPage } from "next";
import { RelayEnvironmentProvider } from "react-relay";
import { Todos } from "../components/relay/Todos";
import environment from "@/enviroment";

const Relay: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>
        <Todos />
      </div>
    </RelayEnvironmentProvider>
  );
};

export default Relay;
