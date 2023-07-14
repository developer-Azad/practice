import { DashBoardLayout } from 'layout';
import { LayoutProps } from 'models';

export default function Layout({ children }: LayoutProps) {
  return <DashBoardLayout>{children}</DashBoardLayout>;
}
