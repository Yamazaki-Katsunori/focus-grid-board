export type TaskStatus = 'inbox' | 'todo' | 'doing' | 'waiting' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export type TaskQuadrant =
  | 'urgentImportant'
  | 'urgentNotImportant'
  | 'notUrgentImportant'
  | 'notUrgentNotImportant';

// --- タスク コア情報 ---------------------------
export type TaskCore = {
  id: string;
  title: string;
  mainText: string;
  status: TaskStatus;
  priority: TaskPriority;
  quadrant: TaskQuadrant;
};

// --- タスク スケジュール情報 --------------------
export type TaskSchedule = {
  scheduledStartDate?: string; // 対応開始予定日 (ISO文字列想定)
  estimatedCompletionDate?: string; // 対応完了予定日
  due?: string; // 表示上の期限
  estimatedMinutes?: number; // 想定工数 (分単位など)
  completedAt?: string; // 実際の完了日時
};

// --- タスク 分類情報 --------------------------------
export type TaskClassification = {
  category: string; // プロジェクト/プライベートなどのカテゴリー種別
  tag?: string; // 仕様/設計/実装... (必要になったら配列に拡張)
  filter?: string; // 'today' | 'thisWeek' ... にしても良い
};

// --- タスク メタ情報 ----------------------------------
export type TaskMeta = {
  createdAt: string;
  updatedAt: string;
  orderIndex?: number; // リスト内の並び順
  isArchived?: boolean; // アーカイブ化されているかの判定値
};

// --- 正の Task 型 ------------------------------------
export type Task = TaskCore & TaskSchedule & TaskClassification & TaskMeta;

// --- タスク情報のメタバッチ -----------------------------
export type TaskMetaBadgesProps = {
  category: string;
  tag: string;
  filter: string;
  status: TaskStatus;
  priority: TaskPriority;
};
