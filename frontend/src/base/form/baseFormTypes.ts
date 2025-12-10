import type { ReactNode } from 'react';
import type { FormProps } from 'react-router';

export type BaseFormProps = FormProps & {
  className?: string;
  children: ReactNode;
};
