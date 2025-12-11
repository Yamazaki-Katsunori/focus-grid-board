import type { BaseSpinnerProps } from '@base/animation/spinner/baseSpinnerTypes';
import { classNames } from '@lib/classNames';

export function BaseSpinner({ size = 'md' }: BaseSpinnerProps) {
  return <span className={classNames(`spinner spinner--${size}`)} aria-hidden="true" />;
}
