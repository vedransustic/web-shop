import React from 'react';
import styled from "styled-components";
import {ProductType} from "../types/InputData";
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: whitesmoke;
  position: absolute;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const ProductItem = (props:{item:ProductType}) => {

    const {item} = props

    return (
        <Container>
            <Circle/>
            <Image src={item.image}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    );
};

export default ProductItem;