// src/domain/focus/mainRoute.ts

import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

export async function focusGridLoader(_args: LoaderFunctionArgs) {
  // ここでタスク一覧やユーザー情報をロードする…のは後で
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return null;
}

export async function focusGridAction(_args: ActionFunctionArgs) {
  return null;
}
