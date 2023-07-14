import { DEFAULT_STYLES } from 'styles';
import { GridItem, GridItemProps } from '@chakra-ui/react';

export const GridSharedSpan = ({ children, ...r }: GridItemProps) => {
  return (
    <GridItem colSpan={DEFAULT_STYLES.sharedSpan} {...r}>
      {children}
    </GridItem>
  );
};
