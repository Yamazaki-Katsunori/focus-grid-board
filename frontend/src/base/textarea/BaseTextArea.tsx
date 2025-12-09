import type { BaseTextAreaProps } from '@base/textarea/BaseTextAreaTypes';

export function BaseTextArea({ className, ...props }: BaseTextAreaProps) {
  return (
    <textarea
      className={['form-input', 'min-h-32', className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}
