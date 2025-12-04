import { AppHeader } from '@base/header/AppHeader';
import { BaseLayout } from '@base/layout/BaseLayout';
import { CreateTaskForm } from '@domain/createTask/CreateTaskForm';

export function CreateTaskPage() {
  return (
    <BaseLayout header={<AppHeader />} sidebar={null}>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="bg-bg-surface w-full max-w-md rounded-xl p-6 shadow-sm">
          <CreateTaskForm />
        </div>
      </div>
    </BaseLayout>
  );
}
