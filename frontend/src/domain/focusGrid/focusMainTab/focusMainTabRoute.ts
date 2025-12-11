import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

export async function focusMainTabLoader(_args: LoaderFunctionArgs) {
  // 試しに 0.8秒タイムアウト
  await new Promise((resolve) => setTimeout(resolve, 800));

  return null;
}

export async function focusMainTabAction(_args: ActionFunctionArgs) {
  return null;
}
