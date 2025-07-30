import React from 'react';
import styled, { css } from 'styled-components';

interface DRButtonProps {
  text?: string;
  type?: 'primary' | 'secundary';
  onClick?: () => void;
}

const StyledButton = styled.button<DRButtonProps>`
  background: ${(props: DRButtonProps) =>
    props.type === 'primary' ? '#eb9800' : '#fff'};
  padding: 16px 32px;
  border: 2px solid #eb9800;
  color: ${(props: DRButtonProps) =>
    props.type === 'primary' ? '#fff' : '#eb9800'};
  font-size: 20px;
  cursor: pointer;
  ${(props: DRButtonProps) =>
    props.type === 'primary'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `}
`;

export const DRButton = ({
  text,
  type = 'primary',
  onClick,
}: DRButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};
