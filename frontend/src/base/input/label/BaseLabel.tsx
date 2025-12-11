import type { BaseLabelProps } from '@base/input/label/baseLabelTypes';
import { classNames } from '@lib/classNames';

export function BaseLabel({ className, ...props }: BaseLabelProps) {
  return <label className={classNames('form-label', className)} {...props} />;
}
