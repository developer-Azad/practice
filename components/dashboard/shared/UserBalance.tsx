import { ColumnFlex, Desc, PageHeader, TandaFlex } from 'components';
import { DEFAULT_STYLES } from 'styles';
import { Button, Center, Flex, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { FiEye } from '@react-icons/all-files/fi/FiEye';
import { FiEyeOff } from '@react-icons/all-files/fi/FiEyeOff';

export const UserBalance = () => {
  const [test, setTest] = useState(false);

  return (
    <Flex w='full' layerStyle='spaced'>
      <ColumnFlex gap='0.5' px={DEFAULT_STYLES.mobilePx}>
        <Desc>Total balance</Desc>

        <TandaFlex gap='4'>
          <PageHeader>{test ? 'N 500,495.00' : 'N 0,00'}</PageHeader>

          <Center
            border={DEFAULT_STYLES.border}
            rounded='full'
            p='1.5'
            cursor='pointer'
            onClick={() => {
              setTest((p) => !p);
            }}
          >
            {test ? (
              <FiEyeOff color={DEFAULT_STYLES.borderColor} fontSize='0.7rem' />
            ) : (
              <FiEye color={DEFAULT_STYLES.borderColor} fontSize='0.7rem' />
            )}
          </Center>
        </TandaFlex>
      </ColumnFlex>

      <HStack>
        <Button>Add money</Button>
        <Button>Send money</Button>
      </HStack>
    </Flex>
  );
};
