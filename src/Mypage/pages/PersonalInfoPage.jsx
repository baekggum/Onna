import PersonalInfo from "../components/Personal/PersonalInfo";
import Page from "./Page";

function PersonalInfoPage() {
  const user = {
    name: "회오리",
    phoneNumber: "010-1234-1234",
    address: "대구광역시 달서구 어쩌구 저쩌구",
  };

  return (
    <Page title="개인 정보" prev="/profile">
      <PersonalInfo user={user} />
    </Page>
  );
}

export default PersonalInfoPage;
