// src/base/button/Button.tsx
import type { ButtonProps } from '@base/button/buttonTypes';

export function Button({
  variant = 'primary',
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'btn',
    variant && `btn--${variant}`,
    fullWidth ? 'btn--full' : 'btn--normal',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
