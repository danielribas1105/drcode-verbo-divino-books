import React from 'react';
import styled from 'styled-components';

export interface DRCardProps {
  children: React.ReactNode;
}

const MainCard = styled.div`
  width: 725px;
  height: 266px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const DRCard = ({ children }: DRCardProps) => {
  return <MainCard>{children}</MainCard>;
};
