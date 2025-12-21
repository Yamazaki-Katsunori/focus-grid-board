import type { FieldErrors } from '@lib/parseFormWithSchema';
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'パスワードは8文字以上で入力してください'),
});

export type LoginInput = z.infer<typeof loginSchema>;

export type LoginActionError = {
  ok: false;
  errors: FieldErrors;
  values: Record<string, FormDataEntryValue>;
};
