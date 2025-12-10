// src/domain/auth/loginRoute.ts
import type { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router';
import { redirect } from 'react-router';

// 今は何もしないで null を返すだけ
export async function loginLoader(_args: LoaderFunctionArgs) {
  // 例: すでにログイン済みなら /app にリダイレクト…とかは将来ここに書ける
  return null;
}

// 今はバリデーションなしで必ず /app に飛ばす
export async function loginAction(_args: ActionFunctionArgs) {
  // const formData = await _args.request.formData();
  // const email = formData.get('email');
  // const password = formData.get('password');
  // ここで zod バリデーションや API 呼び出しを将来追加予定

  return redirect('/focus-grid-board');
}
