/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

import ic_user from "/assets/User.svg";
import ic_payment from "/assets/User.svg";
import ic_setting from "/assets/Setting.svg";
import ic_review from "/assets/Review.svg";

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const MenuItem = styled.li`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 20%);
`;

const MenuLink = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
`;

const IconContainer = styled.div`
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

const Title = styled.div`
  color: black;
  font-size: 1rem;
  text-decoration: none;
`;

function Menu({ trainer }) {
  return (
    <Container>
      <MenuItem>
        <MenuLink to="/personal">
          <IconContainer>
            <Icon src={ic_user} />
          </IconContainer>
          <Title>개인 정보</Title>
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={trainer ? "/appointment" : "/payment"}>
          <IconContainer>
            <Icon src={ic_payment} />
          </IconContainer>
          <Title>{trainer ? "예약 정보" : "결제 내역 및 정보"}</Title>
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/setting">
          <IconContainer>
            <Icon src={ic_setting} />
          </IconContainer>
          <Title>설정</Title>
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/review">
          <IconContainer>
            <Icon src={ic_review} />
          </IconContainer>
          <Title>{trainer ? "리뷰 보기 및 관리" : "리뷰 쓰기 및 관리"}</Title>
        </MenuLink>
      </MenuItem>
    </Container>
  );
}

export default Menu;
