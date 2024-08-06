import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function LoginForm() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    uid: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async () => {
    const data = {
      uid: loginData.uid,
      password: loginData.password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/user/signin`,
        data,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("uid", loginData.uid);
        localStorage.setItem("nickname", response.data.nickname);
        localStorage.setItem("role", response.data.role);
        navigate("/mainpage");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };
  return (
    <Container>
      <LoginInput
        name="uid"
        type="text"
        placeholder="아이디"
        tabIndex="1"
        onChange={handleChange}
      />
      <LoginInput
        name="password"
        type="password"
        placeholder="비밀번호"
        tabIndex="2"
        onChange={handleChange}
      />
      <LoginButton onClick={handleSubmit}>로그인</LoginButton>
    </Container>
  );
}

export default LoginForm;
