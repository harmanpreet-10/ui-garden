import styled from 'styled-components';
import type { TableCellProps } from './TableCell.types';

const Styled = styled.td<{ $backgroundColor: string }>`
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

export const TableCell = ({ text, backgroundColor = '#2563eb', disabled = false, }: TableCellProps) => (
  <Styled  aria-disabled={disabled} $backgroundColor={backgroundColor}>{text}</Styled>
);
