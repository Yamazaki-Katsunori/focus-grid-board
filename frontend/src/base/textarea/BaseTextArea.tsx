import type { BaseTextAreaProps } from '@base/textarea/BaseTextAreaTypes';
import { classNames } from '@lib/classNames';

export function BaseTextArea({ className, ...props }: BaseTextAreaProps) {
  return <textarea className={classNames('form-input', 'min-h-32', className)} {...props} />;
}
