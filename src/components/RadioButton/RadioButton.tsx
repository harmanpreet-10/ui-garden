import styled from 'styled-components';
import type { RadioButtonProps } from './RadioButton.types';

const Styled = styled.input<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px;
  box-sizing: border-box;
  max-width: 100%;
  transition: opacity 0.2s ease;
  cursor: pointer;
  &[aria-disabled="true"], &:disabled {
    background-color: #cccccc;
    color: #555555;
    opacity: 0.55;
    cursor: not-allowed;
    pointer-events: none;
  }
  @media (max-width: 480px) { font-size: 14px; max-width: 100%; }
  appearance: none; width: 25px; height: 25px; border-radius: 50%; &:checked { box-shadow: inset 0 0 0 6px white; }
`;

export const RadioButton = ({ text, backgroundColor = '#2563eb', disabled = false, name, }: RadioButtonProps) => (
  <Styled type="radio" name={name} aria-label={text} disabled={disabled} $backgroundColor={backgroundColor} />
);
