/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

import ic_previous from "/assets/Previous.svg";

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 64px;
  margin-bottom: 32px;
  padding: 0;
  background-color: white;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
`;

const Previous = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  text-decoration: none;
`;

const Icon = styled.img`
  object-fit: none;
`;

function Header({ prev, children }) {
  const prevLink = !prev ? "/" : prev;

  return (
    <Container>
      <Previous to={prevLink} tabIndex="-1">
        <Icon src={ic_previous} />
      </Previous>
      <Title>{children}</Title>
    </Container>
  );
}

export default Header;
