import { AppHeader } from '@base/header/AppHeader';
import { BaseLayout } from '@base/layout/BaseLayout';
import { CreateTaskForm } from '@domain/createTask/CreateTaskForm';
import { AppSidebar } from '@domain/layout/AppSidebar';
import { useState } from 'react';

export function CreateTaskPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <BaseLayout
      header={<AppHeader onToggleSidebar={handleToggleSidebar} />}
      sidebar={<AppSidebar isOpen={isSidebarOpen} />}
    >
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="bg-bg-surface w-full max-w-3xl rounded-xl p-8 shadow-sm">
          <CreateTaskForm />
        </div>
      </div>
    </BaseLayout>
  );
}
