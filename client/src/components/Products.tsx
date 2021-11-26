import React from 'react';
import styled from "styled-components";
import {products} from "../dummy_data";
import {ProductType} from "../types/InputData";
import ProductItem from "./ProductItem";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {
                products.map((item: ProductType) => <ProductItem key={item.id} item={item}/>)
            }
        </Container>
    );
};

export default Products;