
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'children'
  > {
  text: string;
  backgroundColor?: string;
}
