import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  ${mobile({
    width: "100%",
    textAlign: "center"
  })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "100vw",
    display: "flex",
    flexDirection: "column"
  })}
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    width: "80vw",
    margin: "10px auto"
  })}
`;
const Options = styled.option`
  ${mobile({
    margin: "auto"
  })}
`;

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Product</FilterText>
                    <Select>
                        <Options disabled selected>Color</Options>
                        <Options>White</Options>
                        <Options>Black</Options>
                        <Options>Red</Options>
                        <Options>Blue</Options>
                        <Options>Yellow</Options>
                        <Options>Green</Options>
                    </Select>
                    <Select>
                        <Options disabled selected>Size</Options>
                        <Options>XS</Options>
                        <Options>S</Options>
                        <Options>M</Options>
                        <Options>L</Options>
                        <Options>XL</Options>
                        <Options>XXL</Options>
                        <Options>3XL</Options>
                        <Options>4XL</Options>
                        <Options>5XL</Options>
                        <Options>6XL</Options>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Product</FilterText>
                    <Select>
                        <Options selected>Newest</Options>
                        <Options>Price(asc)</Options>
                        <Options>Price(desc)</Options>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;