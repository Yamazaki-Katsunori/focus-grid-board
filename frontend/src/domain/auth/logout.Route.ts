import { redirect } from 'react-router';

// 今は何もしないで null を返すだけ
export async function logoutLoader() {
  return null;
}

// 今はバリデーションなしで必ず /app に飛ばす
export async function logoutAction() {
  return redirect('/login');
}
