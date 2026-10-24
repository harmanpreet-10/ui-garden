import styled from 'styled-components';
import type { TextProps } from './Text.types';

const Styled = styled.p<{ $backgroundColor: string }>`
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
  margin: 0;
`;

export const Text = ({ text, backgroundColor = '#2563eb', disabled = false, }: TextProps) => (
  <Styled  aria-disabled={disabled} $backgroundColor={backgroundColor}>{text}</Styled>
);
