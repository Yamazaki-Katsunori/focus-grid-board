import type { BaseLabelProps } from '@base/input/label/baseLabelTypes';

export function BaseLabel({ className, ...props }: BaseLabelProps) {
  return <label className={['form-label', className].filter(Boolean).join(' ')} {...props} />;
}
