import type { ReactNode } from 'react';

export type BaseLayoutProps = {
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
};
