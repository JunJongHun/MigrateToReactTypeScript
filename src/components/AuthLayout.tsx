import React from "react";
import { styled } from "styled-components";

type AuthLayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
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
