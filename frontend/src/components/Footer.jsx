import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  margin: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
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
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>FLOURISH</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit perspiciatis neque ratione tempore temporibus quam illo
          vel voluptate sit tenetur!
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <i class="fa-brands fa-instagram-square"></i>
          </SocialIcon>
          <SocialIcon>
            <i class="fa-brands fa-twitter"></i>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <i
            class="fa-solid fa-location-dot"
            style={{ marginRight: "10px" }}
          ></i>
          123 Big Shaq Rd.
        </ContactItem>
        <ContactItem>
          <i class="fa-solid fa-envelope" style={{ marginRight: "10px" }}></i>
          flourish@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
}
