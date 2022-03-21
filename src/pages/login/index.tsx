import type { NextPage } from "next";
import { Container, Heading } from "@chakra-ui/react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Container
        w={"full"}
        maxW="3xl"
        centerContent
        m={"0 auto"}
        p={0}
        alignItems="stretch"
      >
        <Heading as="h1" size="lg" my={5} textAlign="center">
          Login
        </Heading>
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginPage;
