import { ColumnFlex } from './ColumnFlex';
import { ColumnFlexProps } from 'models';

export const ModalContainer = ({ children, ...r }: ColumnFlexProps) => {
  return (
    <ColumnFlex layerStyle='modal' {...r}>
      {children}
    </ColumnFlex>
  );
};
