import type { BaseSelectProps } from '@base/select/baseSelectTypes';
import { classNames } from '@lib/classNames';

export function BaseSelect({ className, children, ...props }: BaseSelectProps) {
  return (
    <select name="" id="" className={classNames('form-input', 'form-select', className)} {...props}>
      {children}
    </select>
  );
}
