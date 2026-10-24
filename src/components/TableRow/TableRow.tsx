import styled from 'styled-components';
import type { TableRowProps } from './TableRow.types';

const Styled = styled.tr<{ $backgroundColor: string }>`
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
`;

export const TableRow = ({ text, backgroundColor = '#2563eb', disabled = false, }: TableRowProps) => (
  <Styled  aria-disabled={disabled} $backgroundColor={backgroundColor}><td>{text}</td></Styled>
);
