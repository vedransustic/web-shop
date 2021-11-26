import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.75)), url("https://assets.vogue.com/photos/5f84b645447390a42531d4da/master/w_2560%2Cc_limit/00_story.jpg") center;
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
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;
const Agreement = styled.span`
  font-size: 16px;
  text-align: justify;
  margin: 20px 0;
`;
const Button = styled.button`
  width:50%;
  margin: auto;
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: orange;
  color: black;
  cursor: pointer;
  font-size: 20px;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>By creating this account, I consent to the processing of my personal data in accordence with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register