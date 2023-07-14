import { Center, Icon, Text, CenterProps } from '@chakra-ui/react';
import { IconType } from '@react-icons/all-files';
import { pxToRem } from 'utils';

interface Props extends CenterProps {
  icon: IconType;
  text: string;
}

export const DashButton = ({ icon, text, onClick, ...r }: Props) => {
  return (
    <Center
      border='1px dashed #FFFFFF'
      bg='transparent'
      onClick={onClick}
      as='button'
      type='button'
      w='full'
      gap='1.5'
      rounded='3'
      {...r}
    >
      <Icon as={icon} />
      <Text fontSize={pxToRem(14)}>{text}</Text>
    </Center>
  );
};
