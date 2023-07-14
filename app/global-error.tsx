'use client';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { ColumnFlex, Provider, TandaHeading } from 'components';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { logger } from 'utils';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  logger(error);

  return (
    <html>
      <body
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Provider>
          <ColumnFlex
            width={DEFAULT_STYLES.fullWidth}
            h='100vh'
            position='fixed'
            layerStyle='centered'
            gap='4'
            bg='linear-gradient(180deg, rgba(23, 31, 52, 0.25) 0%, rgba(23, 31, 52, 0.25) 100%)'
            backdropFilter='blur(5px)'
            zIndex={12}
          >
            <ColumnFlex>
              <TandaHeading color='white' {...textStyles.title}>
                Something went wrong!
              </TandaHeading>
              <Button onClick={() => reset()}>Refresh</Button>
            </ColumnFlex>
          </ColumnFlex>
        </Provider>
      </body>
    </html>
  );
}
