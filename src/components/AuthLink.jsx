import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function AuthLink({ to, title, spanText }) {
  return (
    <AuthLinkLayout>
      <span>{spanText}</span>
      <StyeldLink to={`/${to}`}>{title}</StyeldLink>
    </AuthLinkLayout>
  );
}

export default AuthLink;

const AuthLinkLayout = styled.div`
  margin: 1.5rem;
`;

const StyeldLink = styled(Link)`
  margin-left: 0.5rem;
  text-decoration: none;
  color: #025ec0;
  font-weight: bold;
`;
