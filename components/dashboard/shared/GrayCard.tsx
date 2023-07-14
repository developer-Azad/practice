import { Desc, IconBtn } from 'components';
import { DEFAULT_STYLES } from 'styles';
import { Center } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

interface Props {
  text?: ReactNode;
  icon?: ReactElement;
  onClick?: () => void;
}

export const GrayCard = ({ text, icon, onClick }: Props) => {
  return (
    <Center bg='rgba(228, 226, 226, 0.24)' p='1.5' gap='1' rounded='5'>
      {text && <Desc fontWeight={DEFAULT_STYLES.mediumbold}>{text}</Desc>}

      {icon && <IconBtn aria-label='action' icon={icon} onClick={onClick} />}
    </Center>
  );
};
