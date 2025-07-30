import React from 'react';
import styled from 'styled-components';

export interface DRTagProps {
  text?: string;
}

const StyledTag = styled.div<DRTagProps>`
  background: #eb9800;
  padding: 24px 32px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  font-family: sans-serif;
  display: inline-block;
`;

export const DRTag = ({ text }: DRTagProps) => {
  return <StyledTag>{text}</StyledTag>;
};
