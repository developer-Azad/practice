import { Center, CenterProps } from '@chakra-ui/react';
import { DEFAULT_STYLES } from 'styles';

interface Props extends CenterProps {
  item: string;
  isActive?: boolean;
}

export const ActiveCard = ({ item, isActive, ...r }: Props) => {
  return (
    <Center
      border={isActive ? 'none' : DEFAULT_STYLES.border}
      rounded='10px'
      cursor='pointer'
      color={isActive ? DEFAULT_STYLES.deepGreen : 'white'}
      bg={isActive ? DEFAULT_STYLES.yellowGradient : 'transparent'}
      {...r}
    >
      {item}
    </Center>
  );
};
