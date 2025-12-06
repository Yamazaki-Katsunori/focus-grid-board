// src/stories/base/matrix/BaseMatrixBoard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BaseMatrixBoard } from '@base/matrix/BaseMatrixBoard';

// Story 用のシンプルなアイテム型（Task とは無関係）
type MatrixDemoItem = {
  id: string;
  title: string;
};

const DEMO_QUADRANTS = [
  {
    id: 'q1',
    title: '第1象限',
    headerExtra: <span className="text-text-muted text-xs">2件</span>,
    items: [
      { id: '1', title: '重要かつ緊急なタスクA' },
      { id: '2', title: '重要かつ緊急なタスクB' },
    ] as MatrixDemoItem[],
  },
  {
    id: 'q2',
    title: '第2象限',
    headerExtra: <span className="text-text-muted text-xs">1件</span>,
    items: [{ id: '3', title: '重要だが緊急でないタスクC' }] as MatrixDemoItem[],
  },
  {
    id: 'q3',
    title: '第3象限',
    headerExtra: <span className="text-text-muted text-xs">0件</span>,
    items: [] as MatrixDemoItem[],
  },
  {
    id: 'q4',
    title: '第4象限',
    headerExtra: <span className="text-text-muted text-xs">1件</span>,
    items: [{ id: '4', title: '重要でも緊急でもないタスクD' }] as MatrixDemoItem[],
  },
];

// Story 用のラッパーコンポーネント
function BaseMatrixBoardDemo() {
  return (
    <div className="mx-auto max-w-4xl">
      <BaseMatrixBoard<MatrixDemoItem>
        quadrants={DEMO_QUADRANTS}
        renderItem={(item) => (
          <div className="border-border-subtle rounded-lg border bg-white px-2 py-1 text-xs">
            {item.title}
          </div>
        )}
      />
    </div>
  );
}

const meta: Meta<typeof BaseMatrixBoardDemo> = {
  title: 'Base/Matrix/BaseMatrixBoard',
  component: BaseMatrixBoardDemo,
};

export default meta;
type Story = StoryObj<typeof BaseMatrixBoardDemo>;

export const Default: Story = {};
