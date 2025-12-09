import type { ReactNode } from 'react';

export type BaseFormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  helpText: string;
  children: ReactNode;
};
