import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.75)), url("https://media.glamour.com/photos/5fdbb636ff1e1e8a929f8f69/master/w_1600%2Cc_limit/GL-CloseToHome-Lede.jpg") center;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: gray;
  border-radius: 10px;
  ${mobile({
    width: "80%"
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: orange;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flexDirection: "column"
  })}
`;
const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px ;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;
const Button = styled.button`
  width:50%;
  margin: 10px auto;
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: orange;
  color: black;
  cursor: pointer;
  font-size: 20px;
`;
const Link = styled.a`
  width: 100%;
  margin: 10px auto;
  font-size: 16px;
  text-decoration: underline;
  text-align: center;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>LOGIN</Button>
                    <Link>FORGOT YOUR PASSWORD?</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login