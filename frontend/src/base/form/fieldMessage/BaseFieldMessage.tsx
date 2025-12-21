// src/base/form/BaseFieldMessage.tsx
import { classNames } from '@lib/classNames';
import type { ReactNode } from 'react';

export type BaseFieldMessageProps = {
  type?: 'error' | 'help';
  children: ReactNode;
};

export function BaseFieldMessage({ type = 'help', children }: BaseFieldMessageProps) {
  return (
    <span
      className={classNames(
        'form-message',
        type === 'error' ? 'form-message--error' : 'form-message--help',
      )}
    >
      {children}
    </span>
  );
}
