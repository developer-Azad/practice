import { SideBar } from 'components';
import { LayoutProps } from 'models';
import { DEFAULT_STYLES } from 'styles';
import { Flex } from '@chakra-ui/react';
import { PageLayout } from './PageLayout';

export const DashBoardLayout = ({ children }: LayoutProps) => {
  return (
    <Flex
      width={DEFAULT_STYLES.fullWidth}
      maxW={DEFAULT_STYLES.fullWidth}
      minH={DEFAULT_STYLES.fullHeight}
      position='relative'
    >
      <SideBar />

      <PageLayout>{children}</PageLayout>
    </Flex>
  );
};
