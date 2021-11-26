import React from 'react';
import styled from "styled-components";
import {CategoryType} from "../types/InputData";
import {mobile, tablet} from "../responsive";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "30vh"
  })}
  ${tablet({
    height: "40vh"
  })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: orange;
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "40px",
    letterSpacing: "6px"
  })}
  ${tablet({
    fontSize: "50px",
    letterSpacing: "8px"
  })}
`;
const Button = styled.button`
  border: none;
  padding: 20px;
  background-color: orange;
  color: black;
  cursor: pointer;
  font-size: x-large;
  font-weight: 600;
  ${mobile({
    fontSize: "large",
    fontWeight: 600
  })}
  ${tablet({
    fontSize: "large",
    fontWeight: 600
  })}
`;

const CategoryItem = (props:{item:CategoryType}) => {

    const {item} = props

    return (
        <Container>
            <Image src={item.image}/>
            <Info>
                <Title>{item.categoryName}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;