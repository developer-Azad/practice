import { Link, LinkProps } from '@chakra-ui/react';

export const ChakraLink = ({ children, ...r }: LinkProps) => {
  return (
    <Link {...r} isExternal referrerPolicy='no-referrer' target='_blank'>
      {children}
    </Link>
  );
};
