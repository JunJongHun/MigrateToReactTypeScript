import React from "react";
import { styled } from "styled-components";

function AuthInput({ label, name, value, onChange, type, placeholder }) {
  return (
    <AuthInputLayout>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </AuthInputLayout>
  );
}

export default AuthInput;

const AuthInputLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 0.5rem 0;
  font-weight: 600;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
