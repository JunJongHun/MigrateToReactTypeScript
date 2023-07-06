import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import Title from "../components/Title";
import AuthLink from "../components/AuthLink";
import AuthInput from "../components/AuthInput";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";

function LoginPage() {
  const initialData = { email: "", password: "" };
  const { values, handleChange } = useInput(initialData);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 로그인 후 로직
    e.preventDefault();
    console.log(values);
  };
  /**
 * const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);  // 이벤트가 발생한 HTML 요소, 즉 입력 필드의 현재 값을 가져옴
	//가져와서 상태에 저장
  };
 */
  return (
    <AuthLayout>
      <Title name="로그인" />
      <Form>
        <AuthInput
          label="이메일"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <AuthInput
          label="비밀번호"
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          title="로그인"
          color="#007bff"
        />
      </Form>
      <AuthLink
        to="signup"
        title="회원가입"
        spanText="아직 회원이 아니신가요?"
      />
    </AuthLayout>
  );
}

export default LoginPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;
