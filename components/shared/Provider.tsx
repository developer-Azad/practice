'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { LayoutProps } from 'models';
import { theme } from 'styles';
import { DefaultContextProvider } from 'context';

export const Provider = ({ children }: LayoutProps) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <DefaultContextProvider>{children}</DefaultContextProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};
