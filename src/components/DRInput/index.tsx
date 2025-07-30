import React from 'react';
import styled from 'styled-components';

export interface DRInputProps {
  label: string;
  value: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}

const InputField = styled.div`
  width: 500px;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #fff;
  label {
    padding-left: 24px;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #002f52;
  }
  input {
    border: 1px solid #002f52;
    border-radius: 24px;
    padding: 10px 24px;
  }
`;
export const DRInput = ({
  label,
  value,
  type = 'text',
  onChange,
}: DRInputProps) => {
  return (
    <InputField>
      <label>{label}</label>
      <input
        type={type}
        placeholder="seuemail@maneiro.com.br"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </InputField>
  );
};
