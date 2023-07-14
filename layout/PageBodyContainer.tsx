import { ColumnFlex } from 'components';
import { ColumnFlexProps } from 'models';

interface Props extends ColumnFlexProps {
  showUserBalance?: boolean;
}

export const PageBodyContainer = ({ children, ...r }: Props) => {
  return (
    <ColumnFlex w='full' layerStyle='card' gap='10' {...r}>
      {children}
    </ColumnFlex>
  );
};
