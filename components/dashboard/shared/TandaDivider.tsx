import { DEFAULT_STYLES } from 'styles';
import { Box, BoxProps } from '@chakra-ui/react';

export const TandaHDivider = ({ ...r }: BoxProps) => {
  return (
    <Box
      w={DEFAULT_STYLES.fullWidth}
      border={DEFAULT_STYLES.dimBorder}
      {...r}
    />
  );
};

export const TandaVDivider = ({ ...r }: BoxProps) => {
  return <Box border={DEFAULT_STYLES.dimBorder} height='100%' {...r} />;
};
