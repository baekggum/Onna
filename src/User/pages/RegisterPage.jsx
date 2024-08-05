import UserForm from "../components/Register/UserForm";
import Page from "./Page";

function RegisterPage() {
  return (
    <Page title="뒤로가기" prev="/">
      <UserForm />
    </Page>
  );
}

export default RegisterPage;
