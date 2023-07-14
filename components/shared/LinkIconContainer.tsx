import { Icon, LinkProps } from '@chakra-ui/react';
import { ChakraLink, TandaFlex } from 'components';
import { VscLink } from '@react-icons/all-files/vsc/VscLink';

export const LinkIconContainer = ({ children, ...r }: LinkProps) => {
  return (
    <TandaFlex gap='2'>
      <ChakraLink textStyle='body' {...r}>
        {children}
      </ChakraLink>

      <Icon as={VscLink} />
    </TandaFlex>
  );
};
