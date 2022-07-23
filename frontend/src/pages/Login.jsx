import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  height: 30%;
  background-color: white;
  ${mobile({ width: "75%" })};
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px 0;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Link = styled.a`
  cursor: pointer;
  text-decoration: underline;
  font-size: 12px;
  margin: 5px 0;
`;

const Error = styled.span`
  color: red;
  margin-left: 20px;
`;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = function(e) {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>

        <Button disabled={isFetching} onClick={handleLogin}>
          Login
        </Button>
        {error && <Error>Something went wrong...</Error>}
        <LinkContainer>
          <Link>Forgot Password?</Link>
          <Link>Create Account</Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
}
