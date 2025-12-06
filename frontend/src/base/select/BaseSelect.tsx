import type { BaseSelectProps } from '@base/select/baseSelectTypes';

export function BaseSelect({ className, children, ...props }: BaseSelectProps) {
  const classes = ['form-input', 'form-select', className].filter(Boolean).join(' ');
  return (
    <select name="" id="" className={classes} {...props}>
      {children}
    </select>
  );
}
