import styled from "styled-components";
import Page from "./Page";

const SettingItem = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 20%);
`;

function SettingPage() {
  return (
    <Page title="설정" prev="/profile">
      <SettingItem>회원 탈퇴</SettingItem>
      <SettingItem>로그아웃</SettingItem>
    </Page>
  );
}

export default SettingPage;
