import { ColumnFlex } from 'components';
import { ColumnFlexProps } from 'models';
import { DEFAULT_STYLES } from 'styles';

export const DashContainer = ({ children, ...r }: ColumnFlexProps) => {
  return (
    <ColumnFlex
      w='full'
      minH='300px'
      border='1px dashed white'
      bg={DEFAULT_STYLES.deepGreen}
      p='7'
      shadow='0px -1px 24px 16px rgba(0, 0, 0, 0.15)'
      {...r}
    >
      {children}
    </ColumnFlex>
  );
};
