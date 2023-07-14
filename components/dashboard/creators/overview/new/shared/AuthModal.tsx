import QRCode from 'react-qr-code';
import dynamic from 'next/dynamic';
import { ColumnFlex, TandaFlex, TandaHDivider, TandaHeading } from 'components';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { NewUserChangeHandler } from 'store';

interface Props {
  show?: boolean;
  onClick?: () => void;
}

const SharedPortal = dynamic(() =>
  import('components').then((mod) => mod.SharedPortal)
);

export const AuthModal = ({ show, onClick }: Props) => {
  return (
    <SharedPortal show={show} justify='center' onClose={onClick}>
      <ColumnFlex
        w={{ base: '90%', sm: '337px' }}
        boxShadow={DEFAULT_STYLES.boxShadow}
        gap={DEFAULT_STYLES.sharedPx}
        rounded='10px'
        minH='477px'
        maxH='490px'
        alignSelf='center'
        bg='white'
        padding='24px 22px'
      >
        <VStack w='full'>
          <TandaHeading {...textStyles.subtitle}>
            Secure Your Account
          </TandaHeading>
          <Text textStyle='body' textAlign='center'>
            Scan the QR Code below using your preferred authenticator app and
            then enter the provided one-time code below
          </Text>
        </VStack>

        <ColumnFlex layerStyle='centered' w='full'>
          <Box w='92px' h='92px' mb='7'>
            <QRCode
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value='Buxx development by James Chigbo'
              viewBox='0 0 256 256'
            />
          </Box>

          <Text layerStyle='gradientText' textStyle='body'>
            Trouble Scanning?
          </Text>

          <TandaFlex w='full' gap='2' mt='5'>
            <TandaHDivider />
            <Text textStyle='body'>THEN</Text>
            <TandaHDivider />
          </TandaFlex>
        </ColumnFlex>

        <VStack w='241px' alignSelf='center' gap='2'>
          <FormControl
            position='relative'
            display='flex'
            flexDirection='column'
            layerStyle='centered'
          >
            <FormLabel
              color={DEFAULT_STYLES.purple}
              position='absolute'
              bg='white'
              top='-2'
              px='1'
              zIndex={2}
              fontSize={DEFAULT_STYLES.desc}
            >
              Enter your one-time code
            </FormLabel>

            <Input
              borderColor={DEFAULT_STYLES.purple}
              size='lg'
              fontSize='0.73rem'
              fontWeight={400}
              borderWidth='2px'
            />
          </FormControl>

          <Button
            onClick={() => {
              onClick?.();
              NewUserChangeHandler.onAuthenticatedChange(true);
            }}
            w='full'
            size='lgPadding'
          >
            Continue
          </Button>
        </VStack>
      </ColumnFlex>
    </SharedPortal>
  );
};
