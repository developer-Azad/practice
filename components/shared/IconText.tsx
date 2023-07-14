import { Center, Icon } from '@chakra-ui/react';
import { IconType } from '@react-icons/all-files';
import { Desc } from './Desc';

interface Props {
  icon: IconType;
  text?: string;
}

export const IconText = ({ icon, text }: Props) => {
  return (
    <Center border='0.5px solid white' gap='1.5' px='2' py='1' rounded='5'>
      <Icon as={icon} />
      <Desc fontWeight={700}>{text}</Desc>
    </Center>
  );
};
