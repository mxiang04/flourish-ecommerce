import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 14px;
  font-weight: 500;
`;

export default function Announcement() {
  return <Container>30% off all purchases now!</Container>;
}
