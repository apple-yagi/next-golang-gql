import type { NextPage } from "next";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "@/enviroment";
import { RelayContainer } from "@/components/relay/RelayContainer";

const Relay: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <RelayContainer />
    </RelayEnvironmentProvider>
  );
};

export default Relay;
