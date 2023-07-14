import { ColumnFlex } from 'components';
import { ColumnFlexProps } from 'models';
import { DEFAULT_STYLES } from 'styles';

export const GradientBox = ({ children, ...r }: ColumnFlexProps) => {
  return (
    <ColumnFlex {...r} bg={DEFAULT_STYLES.yellowGradient}>
      {children}
    </ColumnFlex>
  );
};
