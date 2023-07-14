import { Flex } from '@chakra-ui/react';
import { ColumnFlexProps } from 'models';

export const TandaFlex = ({ children, ...r }: ColumnFlexProps) => {
  return (
    <Flex layerStyle={r.layerStyle ?? 'flex'} {...r}>
      {children}
    </Flex>
  );
};
