import type { ReactNode, FormHTMLAttributes } from 'react';

export type BaseFormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};
