import type { BaseFormProps } from '@base/form/baseFormTypes';
import { classNames } from '@lib/classNames';
import { Form } from 'react-router';

export function BaseForm({ className, children, ...props }: BaseFormProps) {
  return (
    <Form className={classNames('form', className)} {...props}>
      {children}
    </Form>
  );
}
