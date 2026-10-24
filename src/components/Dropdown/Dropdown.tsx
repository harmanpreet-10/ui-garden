import styled from 'styled-components';
import type { DropdownProps } from './Dropdown.types';

const Styled = styled.select<{ $backgroundColor: string }>`
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
  min-width: 180px;
`;

export const Dropdown = ({ text, backgroundColor = '#2563eb', disabled = false, options, }: DropdownProps) => (
  <Styled  disabled={disabled} $backgroundColor={backgroundColor}>{(options || [text, "Option 2", "Option 3"]).map((option) => <option key={option}>{option}</option>)}</Styled>
);
