import React from 'react';
import styled from "styled-components";
import {mobile, tablet} from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: orange;
  color: black;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  vertical-align: center;
  ${mobile({
    fontSize: "16px",
    textAlign:"center", 
    paddingTop: "5px"
  })}
  ${tablet({
    fontSize: "20px",
    textAlign:"center",
    paddingTop: "2px",
    width: "100%"
  })}
`

const Announcement = () => {
    return (
        <Container>
            Black Friday Super Deal! Get it now at 50% less!
        </Container>
    );
};

export default Announcement;