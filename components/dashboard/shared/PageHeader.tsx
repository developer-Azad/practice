import { TextProps } from '@chakra-ui/react';
import { TandaHeading } from 'components';
import { textStyles } from 'styles';

export const PageHeader = ({ children, ...r }: TextProps) => {
  return (
    <TandaHeading {...r} {...textStyles.header2}>
      {children}
    </TandaHeading>
  );
};
