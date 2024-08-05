/* eslint-disable react/prop-types */
import styled from "styled-components";

import star from "/assets/Star.svg";

const Container = styled.div`
  display: flex;
  width: 80px;
  height: 16px;
`;

const Star = styled.img`
  object-fit: contain;
  filter: ${({ fill }) =>
    fill
      ? "invert(85%) sepia(46%) saturate(3024%) hue-rotate(1deg) brightness(104%) contrast(106%)"
      : "invert(99%) sepia(0%) saturate(6934%) hue-rotate(186deg) brightness(109%) contrast(70%)"};
`;

function Rating({ rate, onClick }) {
  return (
    <Container onClick={onClick}>
      {[1, 2, 3, 4, 5].map((value) => {
        return <Star key={value} src={star} fill={rate >= value} />;
      })}
    </Container>
  );
}

export default Rating;
