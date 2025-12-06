// src/domain/focusGrid/KanbanBoard.tsx
import { BaseKanbanCard } from '@base/card/BaseKanbanCard';
import { BaseKanbanBoard } from '@base/kanban/BaseKanbanBoard';
import type { KanbanColumnData } from '@base/kanban/baseKanbanBoardTypes';

// test data
const SAMPLE_COLUMNS: KanbanColumnData[] = [
  {
    id: 'todo',
    title: 'ToDo',
    badge: '3',
    cards: [
      { id: 't1', title: '旅行記事の下書き', meta: '今週中', tag: '執筆' },
      { id: 't2', title: '写真素材の整理', meta: '今月中', tag: 'リストアップ' },
      { id: 't3', title: '観光ガイドの構成メモ', meta: '未着手', tag: 'アイデア' },
    ],
  },
  {
    id: 'doing',
    title: '進行中',
    badge: '2',
    cards: [
      { id: 't4', title: 'ガイド申請フローの図解', meta: '2時間経過', tag: '設計' },
      { id: 't5', title: 'FocusGrid UI のワイヤー', meta: 'レビュー待ち', tag: 'UI' },
    ],
  },
  {
    id: 'review',
    title: 'レビュー待ち',
    cards: [{ id: 't6', title: 'トップページ文言チェック', meta: 'レビュー依頼中', tag: 'コピー' }],
  },
  {
    id: 'done',
    title: '完了',
    badge: '12',
    cards: [{ id: 't7', title: 'ガイド登録フォーム設計', meta: '昨日完了', tag: 'フォーム' }],
  },
];

export function FocusKanbanBoard() {
  return (
    <BaseKanbanBoard
      columns={SAMPLE_COLUMNS}
      renderCard={(card) => {
        <BaseKanbanCard
          title={card.title}
          meta={card.meta}
          tag={card.tag}
          // footer にステータスや優先度を入れても良い
        />;
      }}
    />
  );
}
