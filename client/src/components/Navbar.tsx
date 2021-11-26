import React from 'react';
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from "@material-ui/core";
import {mobile, tablet} from "../responsive"

const Container = styled.div`
  height: 60px;
  background-color: black;
  ${mobile({
    height: "50px"
  })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  color: aliceblue;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: "10px 0"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ margin: "auto"})}
  ${tablet({
    width: "100%"
  })}
`

const Input = styled.div`
  border: none;
  ${mobile({width: "20px"})}
  ${tablet({
    width: "10px"
  })}
`

const Center = styled.div`
  flex: 1;

`

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2, justifyContent: "center"})}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: "whitesmoke"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LAMA.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;