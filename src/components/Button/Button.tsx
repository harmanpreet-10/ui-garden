
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

interface StyledButtonProps {
  $backgroundColor: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  max-width: 100%;
  box-sizing: border-box;
  transition: background-color 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:focus-visible {
    outline: 3px solid #222222;
    outline-offset: 3px;
  }

  &:disabled {
    background-color: #cccccc;
    color: #ffffff;
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 14px 18px;
    font-size: 14px;
  }
`;

export const Button = ({
  text,
  backgroundColor = '#007bff',
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      $backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    >
      {text}
    </StyledButton>
  );
};
