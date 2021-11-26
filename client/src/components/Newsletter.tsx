import React from 'react';
import styled from "styled-components";
import { Send } from '@material-ui/icons'
import {mobile, tablet} from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({
    height: "auto",
    padding: "20px 0"
  })}
  ${tablet({
    height: "auto",
    padding: "20px 0"
  })}
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: 600;
  margin: 10px;
  ${mobile({
    fontSize: "50px",
    fontWeight: "600"
  })}
`
const Desc = styled.div`
  font-size: xx-large;
  font-weight: 400;
  margin: 10px;
  ${mobile({
    fontSize: "20px",
    fontWeight: "400",
    padding: "0 20px",
    textAlign: "center"
  })}
`;
const InputContainer = styled.div`
  margin: 20px;
  width: 50%;
  height: 40px;
  background-color: whitesmoke;
  display: flex;
  ${mobile({
    width: "80%",
  })}
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: orange;
  ${tablet({
    flex: 2,
  })}
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get updates on your favourite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter