// src/domain/auth/loginRoute.ts
import { loginSchema, type LoginActionError, type LoginInput } from '@domain/auth/loginSchema';
import { parseFormWithSchema } from '@lib/parseFormWithSchema';
import type { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router';
import { redirect } from 'react-router';

// 今は何もしないで null を返すだけ
export async function loginLoader(_args: LoaderFunctionArgs) {
  // 例: すでにログイン済みなら /app にリダイレクト…とかは将来ここに書ける
  return null;
}

// 今はバリデーションなしで必ず /app に飛ばす
export async function loginAction({ request }: ActionFunctionArgs) {
  const result = await parseFormWithSchema<LoginInput>(request, loginSchema);
  console.log(result);

  if (!result.ok) {
    return {
      ok: false as const,
      errors: result.errors,
      values: result.raw,
    } satisfies LoginActionError;
  }
  // TODO : 認証処理
  // await api.login(input.email, input.password);

  return redirect('/focus-grid-board');
}
