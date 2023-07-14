import dynamic from 'next/dynamic';
import { Button, Text } from '@chakra-ui/react';
import { ModalContainer, TandaInput } from 'components';
import { DEFAULT_STYLES } from 'styles';

const SharedPortal = dynamic(() =>
  import('components').then((mod) => mod.SharedPortal)
);

interface Props {
  onClose?: () => void;
  isOpen?: boolean;
}

export const PriceModal = ({ isOpen, onClose }: Props) => {
  return (
    <SharedPortal
      show={isOpen}
      justify='center'
      align='center'
      onClose={onClose}
    >
      {isOpen && (
        <ModalContainer
          w={{ base: '90%', sm: '459px' }}
          minH='max-content'
          position='fixed'
          pb='12'
          pt='10'
          right={{ base: undefined, lg: '420px' }}
          bottom='100px'
          alignSelf='center'
          rounded='8'
          px={DEFAULT_STYLES.sharedPx}
          gap='24px'
        >
          <Text textStyle='title' fontWeight={DEFAULT_STYLES.normalFontWeight}>
            Current Offer Price $100
          </Text>

          <TandaInput
            onChange={(e) => {
              e;
            }}
            inputProps={{
              placeholder: '$150',
              variant: 'darkTransparent',
              size: 'xxl',
            }}
          />

          <Button
            bg={DEFAULT_STYLES.darkerGrayHover}
            color='white'
            size='lg'
            onClick={onClose}
          >
            Confirm
          </Button>
        </ModalContainer>
      )}
    </SharedPortal>
  );
};
