import Page from "./Page";
import ProfileCard from "../components/MyPage/ProfileCard";
import Menu from "../components/MyPage/Menu";

import profile from "/profile.png";

function MyPage() {
  const user = {
    name: "회오리",
    image: profile,
    lessons: 8,
    reviews: 5,
  };

  return (
    <Page title="프로필">
      <ProfileCard user={user} />
      <Menu />
    </Page>
  );
}

export default MyPage;
