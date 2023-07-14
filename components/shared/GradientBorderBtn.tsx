import { DEFAULT_STYLES } from 'styles';
import { Center, Button, ButtonProps } from '@chakra-ui/react';

export const GradientBorderBtn = ({ ...r }: ButtonProps) => {
  return (
    <Center bg={DEFAULT_STYLES.yellowGradient} p='1px' rounded='8'>
      <Button
        bg={DEFAULT_STYLES.deepGreen}
        w='full'
        rounded='8'
        color='white'
        fontSize={DEFAULT_STYLES.textFontSize}
        _hover={{
          bg: DEFAULT_STYLES.deepGreen,
        }}
        {...r}
      >
        {r.children}
      </Button>
    </Center>
  );
};
