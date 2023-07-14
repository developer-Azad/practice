import Image from 'next/image';
import { ColumnFlex, Desc, TandaFlex, TandaHeading } from 'components';
import { CurrencyDataModel } from 'models';
import { currencyIcons, currencyMap } from 'utils';
import { Center, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { AiFillInfoCircle } from '@react-icons/all-files/ai/AiFillInfoCircle';
import { textStyles } from 'styles';

export const CurrencyCard = ({
  name,
  isDefault,
  desc,
  balance,
}: CurrencyDataModel) => {
  return (
    <TandaFlex layerStyle='spaced' mb='1.5'>
      <Flex align='flex-start' gap='4'>
        <HStack>
          <Image src={currencyIcons[name]} alt={name} quality={100} />

          <ColumnFlex>
            <TandaHeading {...textStyles.smallSubtitle}>{name}</TandaHeading>
            <Text textStyle='tiny'>{desc}</Text>
          </ColumnFlex>
        </HStack>

        {isDefault && (
          <Center bg='rgba(99, 115, 129, 0.1)' p='1' gap='1.5' rounded='4'>
            <Text textStyle='tiny'>Default currency</Text>
            <Icon as={AiFillInfoCircle} fontSize='0.75rem' />
          </Center>
        )}
      </Flex>

      <Desc color='#AAAAAA'>
        {currencyMap[name]} {balance}
      </Desc>
    </TandaFlex>
  );
};
