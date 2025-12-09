import type { BaseFormProps } from '@base/form/baseFormTypes';

export function BaseForm({ className, children, ...props }: BaseFormProps) {
  const classes = ['form', className].filter(Boolean).join(' ');

  return (
    <form action="" className={classes} {...props}>
      {children}
    </form>
  );
}
