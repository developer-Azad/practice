'use client';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { TandaFlex } from 'components';
import { setCookie } from 'cookies-next';
import { UserType } from 'models';
import { DEFAULT_STYLES } from 'styles';
import { DashRoutes } from 'utils';

export const HomeClient = () => {
  return (
    <TandaFlex
      layerStyle='centered'
      minH={DEFAULT_STYLES.fullHeight}
      gap='10'
      flexDir={{ base: 'column', sm: 'row' }}
    >
      <Link href={DashRoutes.overview}>
        <Button
          onClick={() => {
            setCookie('type', UserType.Creator, {
              sameSite: true,
            });
          }}
        >
          See creator Dashboard
        </Button>
      </Link>

      <Link href={DashRoutes.campaigns}>
        <Button
          onClick={() => {
            setCookie('type', UserType.Brand, {
              sameSite: true,
            });
          }}
        >
          See Brand Dashboard
        </Button>
      </Link>
    </TandaFlex>
  );
};
