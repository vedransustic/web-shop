import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "0px",
    flexDirection: "column"
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  padding: 0 50px;
  ${mobile({
    width: "100wv",
    height: "auto"
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({
    fontSize: "24px",
    textAlign: "center"
  })}
`;
const Desc = styled.p`
  margin: 20px 0;
  ${mobile({
    textAlign: "justify"
  })}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    margin: "20px"
  })}
`;
const FilterTile = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props: { color: string; }) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  ${mobile({
    width: "20vh"
  })}
`;
const FilterSizeOptions = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "75vw",
    marginBottom: "5vh"
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: whitesmoke;
  cursor: pointer;
  font-weight: 500;
  ${mobile({
    width: "150px",
    backgroundColor: "black",
    color: "whitesmoke",
    fontWeight: 500,
    fontSize: "large",
    padding: "12px",
    marginTop: "10px"
  })}

  &:hover{
    background-color: #f8f4f4;
  }
`;

const Product = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Rocket Vintage Chill Cap</Title>
                    <Desc>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTile>Color</FilterTile>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                            <FilterColor color="red"/>
                            <FilterColor color="blue"/>
                        </Filter>
                        <Filter>
                            <FilterTile>Size</FilterTile>
                            <FilterSize>
                                <FilterSizeOptions>XS</FilterSizeOptions>
                                <FilterSizeOptions>S</FilterSizeOptions>
                                <FilterSizeOptions>M</FilterSizeOptions>
                                <FilterSizeOptions>L</FilterSizeOptions>
                                <FilterSizeOptions>XL</FilterSizeOptions>
                                <FilterSizeOptions>XXL</FilterSizeOptions>
                                <FilterSizeOptions>3XL</FilterSizeOptions>
                                <FilterSizeOptions>4XL</FilterSizeOptions>
                                <FilterSizeOptions>5XL</FilterSizeOptions>
                                <FilterSizeOptions>6XS</FilterSizeOptions>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;