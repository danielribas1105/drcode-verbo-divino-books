import React, { useState } from 'react';
import styled from 'styled-components';

interface DROption {
  id: number;
  type: string;
  value: number;
  text: string;
  selected: boolean;
}

interface DROptionsGroupProps {
  options: DROption[];
  defaultValue?: DROption | null;
  onChange?: (option: DROption) => void;
}

interface StyledSectionProps {
  selected: boolean;
}

const StyledSection = styled.section<StyledSectionProps>`
  width: 194px;
  height: 88px;
  background: ${(props) =>
    props.selected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#fff'};
  border: 1px solid;
  border-color: ${(props) =>
    props.selected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#eb9800'};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: 400;
  color: ${(props) => (props.selected ? '#fff' : '#eb9800')};
  cursor: pointer;
  strong {
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color: ${(props) => (props.selected ? '#fff' : '#000')};
    opacity: ${(props) => (props.selected ? '100%' : '54%')};
  }
`;

export const DROptionsGroup = ({
  options,
  defaultValue,
  onChange,
}: DROptionsGroupProps) => {
  const [selection, setSelection] = useState<DROption | null>(
    defaultValue ?? null
  );

  function onSelected(option: DROption): void {
    setSelection(option);
    if (onChange) {
      onChange(option);
    }
  }

  return (
    <>
      {options.map((option) => (
        <StyledSection
          key={option.id}
          selected={selection?.id === option.id}
          onClick={() => onSelected(option)}
        >
          <header>{option.type}</header>
          <div>
            <strong>R$ {option.value}</strong>
          </div>
          <footer>{option.text}</footer>
        </StyledSection>
      ))}
    </>
  );
};
