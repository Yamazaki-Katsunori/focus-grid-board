// src/lib/parseFormWithSchema.ts
import { z, type ZodError } from 'zod';

export type FieldErrors = Record<string, string[]>;

function toFieldErrors(error: ZodError<unknown>): FieldErrors {
  const { fieldErrors } = z.flattenError(error);
  // fieldErrors は { [key: string]: string[] } の形
  return fieldErrors;
}

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: FieldErrors; raw: Record<string, FormDataEntryValue> };

export async function parseFormWithSchema<T>(
  request: Request,
  schema: z.ZodType<T>,
): Promise<ValidationResult<T>> {
  const formData = await request.formData();

  const raw: Record<string, FormDataEntryValue> = {};
  formData.forEach((value, key) => {
    raw[key] = value;
  });

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      errors: toFieldErrors(parsed.error),
      raw,
    };
  }

  return {
    ok: true,
    data: parsed.data as T,
  };
}
