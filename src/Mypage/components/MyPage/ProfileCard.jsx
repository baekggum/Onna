import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 216px;
  margin-bottom: 48px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 15%);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 16px;
`;

const ProfileImage = styled.img`
  width: 128px;
  height: 128px;
  margin-bottom: 8px;
  border-radius: 50%;
  object-fit: contain;

  @media (max-width: 450px) {
    width: 96px;
    height: 96px;
  }
`;

const Name = styled.span`
  font-size: 20px;
  text-align: center;
`;

const Type = styled.span`
  font-size: 10px;
  text-align: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  align-content: stretch;
  width: 50%;
  padding: 16px;
`;

const LessonCount = styled.span`
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 20%);
  font-size: 1rem;
`;

const ReviewCount = styled.span`
  width: 100%;
  padding-top: 8px;
  font-size: 1rem;
`;

const Label = styled.span`
  display: block;
  font-size: 0.625rem;
`;

/* eslint-disable react/prop-types */
function ProfileCard({ user, trainer }) {
  const { name, image, lessons, reviews } = user;

  const userType = trainer ? "트레이너" : "게스트";
  const lessonLabel = trainer ? "레슨" : "이용";
  const reviewLabel = trainer ? "리뷰수" : "리뷰";

  return (
    <Container>
      <Profile>
        <ProfileImage src={image} />
        <Name>{name}</Name>
        <Type>{userType}</Type>
      </Profile>
      <Info>
        <LessonCount>
          <Label>{lessonLabel}</Label>
          {`${lessons}회`}
        </LessonCount>
        <ReviewCount>
          <Label>{reviewLabel}</Label>
          {`${reviews}개`}
        </ReviewCount>
      </Info>
    </Container>
  );
}

export default ProfileCard;
