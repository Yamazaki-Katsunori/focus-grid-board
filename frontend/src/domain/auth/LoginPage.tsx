import { AppHeader } from '@base/header/AppHeader';
import { BaseLayout } from '@base/layout/BaseLayout';
import { LoginForm } from '@domain/auth/LoginForm';

export function LoginPage() {
  return (
    <BaseLayout header={<AppHeader />} sidebar={null}>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="bg-bg-surface w-full max-w-md rounded-xl p-6 shadow-sm">
          <LoginForm />
        </div>
      </div>
    </BaseLayout>
  );
}
