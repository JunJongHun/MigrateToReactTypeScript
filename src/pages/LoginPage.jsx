import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import Title from "../components/Title";
import AuthLink from "../components/AuthLink";
import AuthInput from "../components/AuthInput";
import Button from "../components/Button";

const LoginPage = () => {
  const initialData = { email: "", password: "" };
  const { values, handleChange } = useInput(initialData);

  const handleSubmit = (e) => {
    // 로그인 후 로직
    e.preventDefault();
    console.log(values);
  };

  return (
    <LoginPageLayout>
      <Title name="로그인" />
      <Form>
        <AuthInput
          label="이메일"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <AuthInput
          label="비밀번호"
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          title="로그인"
          color="#007bff"
        />
      </Form>
      <AuthLink to="signup" title="SignUp" spanText="아직 회원이 아니신가요?" />
    </LoginPageLayout>
  );
};

export default LoginPage;

const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;
