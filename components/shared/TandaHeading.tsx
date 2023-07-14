import { Heading, HeadingProps } from '@chakra-ui/react';
import { outfit } from 'styles';

export const TandaHeading = ({ children, ...r }: HeadingProps) => {
  return (
    <Heading className={outfit.className} {...r}>
      {children}
    </Heading>
  );
};
