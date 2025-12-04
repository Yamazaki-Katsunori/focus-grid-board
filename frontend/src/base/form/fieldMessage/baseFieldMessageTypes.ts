import type { ReactNode } from 'react';

export type BaseFieldMessageProps = {
  type?: 'error' | 'help';
  children: ReactNode;
};
