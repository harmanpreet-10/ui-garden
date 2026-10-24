import styled from 'styled-components';
import type { ImgProps } from './Img.types';

const Styled = styled.img<{ $backgroundColor: string }>`
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
  display: block; width: 100%; height: auto; object-fit: cover;
`;
const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="300"%3E%3Crect width="800" height="300" fill="%232563eb"/%3E%3C/svg%3E';
export const Img = ({ text, backgroundColor = '#2563eb', disabled = false, src, }: ImgProps) => (
  <Styled src={src || placeholder} alt={text} aria-disabled={disabled} $backgroundColor={backgroundColor} />
);
