import { Container, Spacer } from "@nextui-org/react";
import { Link } from "@/components/atom/Link";

export const Header = () => {
  return (
    <Container
      as="header"
      display="flex"
      justify="center"
      alignItems="center"
      css={{ height: "60px" }}
    >
      <Link css={{ fontSize: "16px" }} href="/" block>
        Top
      </Link>
      <Spacer />
      <Link css={{ fontSize: "16px" }} href="/relay" block>
        relay
      </Link>
    </Container>
  );
};
