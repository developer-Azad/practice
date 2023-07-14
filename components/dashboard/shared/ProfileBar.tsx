import { IconBtn } from 'components';
import { useDefaultContext } from 'context';
import { DEFAULT_STYLES } from 'styles';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Avatar, Flex, HStack } from '@chakra-ui/react';
import { BrandProfile } from './BrandProfileBar';

export const ProfileBar = () => {
  const { updateDefaultProps, showAvatar, isBrand } = useDefaultContext();

  return (
    <Flex
      position='fixed'
      layerStyle='centered'
      w='100%'
      maxW='100%'
      px='3'
      bg={DEFAULT_STYLES.deepGreen}
      zIndex={5}
      py={{ base: '10px', xl: '20px' }}
    >
      <HStack layerStyle='container' justify='flex-end'>
        {showAvatar && (
          <>
            {isBrand ? (
              <BrandProfile />
            ) : (
              <Avatar
                name='Kent Dodds'
                src='https://bit.ly/kent-c-dodds'
                size='sm'
                cursor='pointer'
                border={`3px solid ${DEFAULT_STYLES.borderColor}`}
              />
            )}
          </>
        )}

        <IconBtn
          aria-label='Close button'
          icon={<HamburgerIcon fontSize='1.5rem' color='white' />}
          display={{ base: 'flex', xl: 'none' }}
          bgColor='transparent'
          onClick={() => {
            updateDefaultProps(true, 'media');
          }}
        />
      </HStack>
    </Flex>
  );
};
