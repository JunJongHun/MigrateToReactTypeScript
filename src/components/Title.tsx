import React from "react";
import styled from "styled-components";

type TitleProps = {
  name: string;
};

function Title({ name }: TitleProps) {
  return <TitleLayout>{name}</TitleLayout>;
}

export default Title;

const TitleLayout = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #3d3d3d;
`;
