// src/base/form/BaseFieldMessage.tsx
import type { ReactNode } from 'react';

export type BaseFieldMessageProps = {
  type?: 'error' | 'help';
  children: ReactNode;
};

export function BaseFieldMessage({ type = 'help', children }: BaseFieldMessageProps) {
  const classes = ['form-message', type === 'error' ? 'form-message--error' : 'form-message--help']
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
}
