import type { BaseFormProps } from '@base/form/baseFormTypes';
import { Form } from 'react-router';

export function BaseForm({ className, children, ...props }: BaseFormProps) {
  const classes = ['form', className].filter(Boolean).join(' ');

  return (
    <Form className={classes} {...props}>
      {children}
    </Form>
  );
}
