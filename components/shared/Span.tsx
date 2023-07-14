import { Box, BoxProps } from '@chakra-ui/react';

export const Span = ({ children, ...rest }: BoxProps) => {
  return (
    <Box as='span' {...rest}>
      {children}
    </Box>
  );
};
