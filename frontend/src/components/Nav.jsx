import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "5px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`;

const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  text-decoration: none;
`;

const Badge = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  text-align: center;
  background-color: grey;
  color: white;
  position: absolute;
  right: 15px;
  top: 35px;
  ${mobile({ right: "5px" })}
`;

export default function Nav() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search..." />
            <i class="fa-solid fa-magnifying-glass"></i>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/">FLOURISH</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">LOGIN</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>

            <Badge>{quantity}</Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
