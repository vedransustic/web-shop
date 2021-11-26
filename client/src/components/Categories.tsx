import React from 'react';
import styled from "styled-components";
import {categories} from "../dummy_data";
import CategoryItem from "./CategoryItem";
import {CategoryType} from "../types/InputData";
import {mobile, tablet} from "../responsive";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginBottom: "10px"
  })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginBottom: "10px"
  })}
`;

const Categories = () => {
    console.log(typeof categories)
    return (
        <Container>
            {
                categories.map((item:CategoryType) =>
                    <CategoryItem key={item.id} item={item}/>
                )
            }
        </Container>
    );
};

export default Categories;