import { Text, TextProps } from '@chakra-ui/react';

export const Desc = ({ children, ...r }: TextProps) => {
  return (
    <Text textStyle='desc' {...r}>
      {children}
    </Text>
  );
};
