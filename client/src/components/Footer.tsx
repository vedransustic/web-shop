import React from 'react';
import styled from "styled-components";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";
import {mobile, tablet} from "../responsive";

const Container = styled.div`
  display: flex;
  justify-items: center;
  background-color: black;
  color: whitesmoke;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  flex:1;
  margin: auto;
  color: orange;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none"
  })}
  ${tablet({
    display: "none"
  })}
`;
const SocialContainer = styled.div`
  display: flex;
  ${mobile({
    justifyContent: "center",
  })}
  ${tablet({
    justifyContent: "center",
  })}
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color:whitesmoke;
  background-color: #${(props: { color: string; }) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  color: orange;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${tablet({
    justifyContent: "center",
    textAlign: "center"
  })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${tablet({
    paddingLeft: "14vh"
  })}
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links:</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/> Korzo 14, Rijeka 51000
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/> +385 452 151
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/> sustic_vedran@yahoo.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    );
};

export default Footer;