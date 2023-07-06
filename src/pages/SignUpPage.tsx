import React from "react";
import AuthLink from "../components/AuthLink";
import Title from "../components/Title";
import { styled } from "styled-components";
import useInput from "../hooks/useInput";
import AuthInput from "../components/AuthInput";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";

function SignUpPage() {
  const initialData = { name: "", email: "", password: "" };
  const { values, handleChange } = useInput(initialData);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 회원가입 후 로직
    e.preventDefault();
    console.log(values);
  };

  return (
    <AuthLayout>
      <Title name="회원가입" />
      <Form>
        <AuthInput
          label="이름"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          type="text"
          placeholder="이름을 입력하세요."
        />
        <AuthInput
          label="이메일"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          placeholder="이메일을 입력하세요."
        />
        <AuthInput
          label="비밀번호"
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
        <Button
          title="회원가입"
          type="submit"
          onClick={handleSubmit}
          color="#007bff"
        />
      </Form>
      <AuthLink to="" title="로그인" spanText="계정이 이미 있으신가요?" />
    </AuthLayout>
  );
}

export default SignUpPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;
