import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface DRInputCounterProps {
  onChange: (value: number) => void;
}

const InputCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
  background: #fff;
  font-size: 18px;
  color: #000;
  font-family: sans-serif;
  font-weight: 700;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  button {
    width: 28px;
    height: 28px;
    color: #fff;
    background: #002f52;
    border-radius: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    cursor: pointer;
  }
  span {
    color: #002f52;
  }
`;
export const DRInputCounter = ({ onChange }: DRInputCounterProps) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (onChange) {
      onChange(Number(value));
    }
  }, [value]);
  return (
    <InputCounter>
      <label>Quantidade</label>
      <div>
        <button onClick={() => setValue((prev) => prev - 1)}>-</button>
        <span>{value}</span>
        <button onClick={() => setValue((prev) => prev + 1)}>+</button>
      </div>
    </InputCounter>
  );
};
