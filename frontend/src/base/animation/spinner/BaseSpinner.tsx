import type { BaseSpinnerProps } from '@base/animation/spinner/baseSpinnerTypes';

export function BaseSpinner({ size = 'md' }: BaseSpinnerProps) {
  return <span className={`spinner spinner--${size}`} aria-hidden="true" />;
}
