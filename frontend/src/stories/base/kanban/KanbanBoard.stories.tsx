import type { Meta, StoryObj } from '@storybook/react-vite';

import { BaseKanbanBoard } from '@base/kanban/BaseKanbanBoard';
import type { KanbanColumnData } from '@base/kanban/baseKanbanBoardTypes';

const meta: Meta<typeof BaseKanbanBoard> = {
  title: 'Base/Kanban/BaseKanbanBoard',
  component: BaseKanbanBoard,
};

export default meta;
type Story = StoryObj<typeof BaseKanbanBoard>;

const COLUMNS: KanbanColumnData[] = [
  {
    id: 'todo',
    title: 'ToDo',
    badge: '3',
    cards: [
      { id: 'c1', title: '旅行記事の下書き', meta: '今週中', tag: '執筆' },
      { id: 'c2', title: '写真素材の整理', meta: '今月中', tag: '整理' },
      { id: 'c3', title: '観光スポット調査', meta: '未着手', tag: 'リサーチ' },
    ],
  },
  {
    id: 'doing',
    title: '進行中',
    badge: '2',
    cards: [
      { id: 'c4', title: 'FocusGrid UI プロト', meta: '2時間経過', tag: 'UI' },
      { id: 'c5', title: 'ガイド登録フロー整理', meta: 'レビュー待ち', tag: '仕様' },
    ],
  },
  {
    id: 'review',
    title: 'レビュー待ち',
    cards: [{ id: 'c6', title: 'トップページ文言チェック', meta: 'レビュー依頼中', tag: 'コピー' }],
  },
  {
    id: 'done',
    title: '完了',
    badge: '12',
    cards: [{ id: 'c7', title: 'フォーム項目の洗い出し', meta: '昨日完了', tag: 'フォーム' }],
  },
];

export const Default: Story = {
  args: {
    columns: COLUMNS,
  },
};
