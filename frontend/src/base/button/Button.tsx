// src/base/button/Button.tsx
import type { ButtonProps } from '@base/button/buttonTypes';
import { classNames } from '@lib/classNames';

export function Button({
  variant = 'primary',
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  // --- 元の classes 定義 ---
  // const classes = [
  //   'btn',
  //   variant && `btn--${variant}`,
  //   fullWidth ? 'btn--full' : 'btn--normal',
  //   className,
  // ]
  //   .filter(Boolean)
  //   .join(' ');

  return (
    <button
      className={classNames(
        'btn',
        variant && `btn--${variant}`,
        fullWidth ? 'btn--full' : 'btn--normal',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
