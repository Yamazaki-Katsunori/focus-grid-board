import type { BaseInputProps } from '@base/input/baseInputTypes';

export function BaseInput(props: BaseInputProps) {
  return <input className="form-input" {...props} />;
}
