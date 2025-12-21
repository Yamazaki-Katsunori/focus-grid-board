// src/domain/auth/loginRoute.ts
import type { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router';
import { redirect } from 'react-router';

// 今は何もしないで null を返すだけ
export async function createTaskLoader(_args: LoaderFunctionArgs) {
  // 例: すでにログイン済みなら /app にリダイレクト…とかは将来ここに書ける

  // ここでタスク一覧やユーザー情報をロードする…のは後で
  await new Promise((resolve) => setTimeout(resolve, 800));

  return null;
}

// 今はバリデーションなしで必ず /app に飛ばす
export async function createTaskAction(_args: ActionFunctionArgs) {
  return redirect('/focus-grid-board/create-task');
}
