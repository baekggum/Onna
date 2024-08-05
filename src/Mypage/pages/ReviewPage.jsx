import ReviewUpload from "../components/Review/ReviewUpload";
import Page from "./Page";

function ReviewPage() {
  return (
    <Page title="리뷰쓰기 및 관리" prev="/profile">
      <ReviewUpload lesson={{ title: "대구 야구 코칭, 타격 코칭" }} />
    </Page>
  );
}

export default ReviewPage;
