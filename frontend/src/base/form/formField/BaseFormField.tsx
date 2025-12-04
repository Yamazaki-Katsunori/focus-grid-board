import type { BaseFormFieldProps } from '@base/form/formField/baseFormFieldTypes';
import { BaseLabel } from '@base/input/label/BaseLabel';
import { BaseFieldMessage } from '../fieldMessage/BaseFieldMessage';

export function BaseFormField({
  label,
  htmlFor,
  required,
  error,
  helpText,
  children,
}: BaseFormFieldProps) {
  return (
    <div className="form-field">
      <div className="form-field__header">
        <BaseLabel htmlFor={htmlFor}>
          {label}
          {required && <span className="ml-1 text-red-600">*</span>}
        </BaseLabel>

        {error ? (
          <BaseFieldMessage type="error">{error}</BaseFieldMessage>
        ) : helpText ? (
          <BaseFieldMessage type="help">{helpText}</BaseFieldMessage>
        ) : null}
      </div>
      <div className="ml-1">{children}</div>
    </div>
  );
}
