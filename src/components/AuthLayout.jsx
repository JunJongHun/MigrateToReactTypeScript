import React from "react";
import { styled } from "styled-components";

function AuthLayout({ children }) {
  return <AuthLayoutLayout>{children}</AuthLayoutLayout>;
}

export default AuthLayout;

const AuthLayoutLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;
