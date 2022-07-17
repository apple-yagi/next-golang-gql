import { Text } from "@nextui-org/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
        textAlign: "center",
      }}
      weight="bold"
    >
      Hello World!
    </Text>
  );
};

export default Home;
