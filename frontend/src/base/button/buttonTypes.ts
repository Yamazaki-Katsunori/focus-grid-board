import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type Variant = 'primary' | 'secondary' | 'ghost';

export type ButtonProps = {
  variant?: Variant;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
