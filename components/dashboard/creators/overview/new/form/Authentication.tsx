import Image from 'next/image';
import {
  ColumnFlex,
  GridSharedSpan,
  InfoAlert,
  Span,
  TandaHeading,
  Details,
} from 'components';
import { Button, Grid, Text } from '@chakra-ui/react';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { NewUserChangeHandler, authDetails, useNewCreatorStore } from 'store';
import { useState } from 'react';
import { AuthModal } from '../shared';

export const Authentication = () => {
  const authed = useNewCreatorStore((s) => s.authenticated);
  const [show, setShow] = useState(false);

  const renderOptions = authDetails.map((opts) => {
    return (
      <ColumnFlex key={opts.id} gap='4'>
        <Image src={opts.icon} alt={opts.title ?? ''} />
        <ColumnFlex gap='0.5'>
          <TandaHeading {...textStyles.label}>{opts.title}</TandaHeading>
          <Text textStyle='tiny' color={DEFAULT_STYLES.darkGray}>
            {opts.desc}
          </Text>
        </ColumnFlex>
      </ColumnFlex>
    );
  });

  const changeShowHandler = () => {
    setShow((p) => !p);
  };

  return (
    <>
      <GridSharedSpan>
        <Details title='Account Security' />
      </GridSharedSpan>

      <GridSharedSpan mb={{ base: '50px', lg: '150px' }}>
        <ColumnFlex
          w='full'
          minH='572px'
          bg='white'
          shadow='0px 1px 3px #D7D7E0'
          rounded='5'
          gap='9'
          p={{ base: '3', md: '7' }}
        >
          <Button
            alignSelf='flex-end'
            onClick={() => {
              if (authed)
                return NewUserChangeHandler.onAuthenticatedChange(false);

              changeShowHandler();
            }}
            variant={authed ? 'noBg' : 'bg'}
            color={DEFAULT_STYLES.deepGreen}
          >
            {`${authed ? 'Disable' : 'Enable'} 2 Factor Authentication`}
          </Button>

          <ColumnFlex gap='4' color={DEFAULT_STYLES.darkPurple}>
            <InfoAlert
              text={
                authed
                  ? '2FA is currently enabled'
                  : 'Please enable 2FA to improve your security'
              }
              type={authed ? 'success' : 'warning'}
            />

            <Text textStyle='body' maxW='540px'>
              Protect your account and transaction with 2FA. We will ask for
              this code on every login. This protects you in case our password
              is compromised.
            </Text>

            <Text textStyle='body'>
              We recommend{' '}
              <Span layerStyle='gradientText'>Google Authenticator:</Span>
            </Text>
          </ColumnFlex>

          <ColumnFlex
            w='full'
            minH='251px'
            rounded='8'
            gap='10'
            border={`1px solid ${DEFAULT_STYLES.altTextColor}`}
            color={DEFAULT_STYLES.darkPurple}
            p={{ base: '3', md: '4' }}
            mb={{ base: 8, md: 0 }}
          >
            <TandaHeading {...textStyles.bolderBody}>
              How to use Google Authenticator
            </TandaHeading>

            <Grid gridTemplateColumns={DEFAULT_STYLES.gridTemplate} gap='10'>
              {renderOptions}
            </Grid>
          </ColumnFlex>
        </ColumnFlex>
      </GridSharedSpan>

      <AuthModal show={show} onClick={changeShowHandler} />
    </>
  );
};
