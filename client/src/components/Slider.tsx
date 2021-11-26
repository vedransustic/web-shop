import React, {useState} from 'react';
import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import { sliderItems } from "../dummy_data";
import {DataType} from "../types/InputData";
import {mobile, tablet} from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({
    height: "auto"
  })}
  ${tablet({
    height: "auto"
  })}
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${ (props: { direction: string; }) => props.direction === "left" && "10px"};
  right: ${ (props: { direction: string; }) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${mobile({
    textAlign: "center",
    backgroundColor: "orange"
  })}
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: { slideIndex: number; }) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props: { backgroundColor: any; }) => props.backgroundColor};
  ${mobile({
    display: "flex",
    flexDirection: "column",
    height: "auto"
  })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
    height: "auto"
  })}
`
const ImageContainer = styled.div`
  height: 100%;
  width: 50vw;
  flex: 1;
  ${mobile({
    width: "100%"
  })}
  ${tablet({
    width: "100vw",
    height: "48vh",
  })}
`
const Image = styled.img`
  height: 100%;
  max-width: 50vw;
  object-fit: cover;
  ${mobile({
    minWidth: "100%", 
    height: "40vh"
  })}
  ${tablet({
    minWidth: "100%",
    height: "100%",
    objectFit: "cover"
  })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column"
  })}
  ${tablet({
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column"
  })}
`

const Title = styled.h1`
  font-size: 70px;
  ${mobile({
    fontSize: "20px",
    textAlign: "center"
  })}
  ${tablet({
    fontSize: "40px",
    fontWeight: 600,
    textAlign: "center"
  })}
`

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({
    fontSize: "16px",
    textAlign: "justify",
    margin: "10px"
  })}
  ${tablet({
    fontSize: "24px",
    textAlign: "justify",
    margin: "10px"
  })}
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({
    margin: "10px",
    textAlign: "center"
  })}
  ${tablet({
    margin: "auto",
    width: "50%",
    textAlign: "center"
  })}
`

const Slider: React.FC = () => {

    const [slideIndex, setSlideIndex] = useState<number>(0)

    const handleClick = (dir: string) => {
        (slideIndex > sliderItems[0].id && dir === "L") ? setSlideIndex(slideIndex-1) : setSlideIndex(slideIndex+1);
        (slideIndex === sliderItems[0].id && dir === "L") && setSlideIndex(sliderItems.length-1);
        (slideIndex === (sliderItems.length-1) && dir === "R") && setSlideIndex(sliderItems[0].id);
    }

    return (
        <Container>
            <Arrow direction={"left"} onClick={() => handleClick("L")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItems.map((item: DataType) => {
                       return   <Slide key={item.id} backgroundColor={item.bg}>
                                    <ImageContainer>
                                        <Image src={item.img}/>
                                    </ImageContainer>
                                    <InfoContainer>
                                        <Title>{item.title}</Title>
                                        <Desc>{item.desc}</Desc>
                                        <Button>SHOP NOW</Button>
                                    </InfoContainer>
                                </Slide>
                    })
                }
            </Wrapper>
            <Arrow direction={"right"} onClick={() => handleClick("R")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;