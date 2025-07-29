import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  background: #eb9800;
  padding: 16px 32px;
  border: 2px solid #eb9800;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #b87900;
    border: 2px solid #b87900;
  }
`;
export const DRButton = () => {
  return <PrimaryButton>Clique aqui</PrimaryButton>;
};
