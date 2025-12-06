// src/base/matrix/BaseMatrixBoard.tsx
import type { ReactNode } from 'react';

export type MatrixQuadrantProps<T> = {
  id: string;
  title: string;
  headerExtra?: ReactNode;
  items: T[];
};

export type BaseMatrixBoardProps<T> = {
  quadrants: MatrixQuadrantProps<T>[];
  /** 1件ずつ描画する従来のやり方 */
  renderItem?: (item: T) => ReactNode;
  /** items 全体を自由なレイアウト（table など）で描画したいときに使う */
  renderItems?: (items: T[]) => ReactNode;
};
