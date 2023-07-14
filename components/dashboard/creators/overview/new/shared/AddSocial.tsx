import Image from 'next/image';
import { ColumnFlex, TandaHeading } from 'components';
import { AddSocialModel } from 'models';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { Button, Center } from '@chakra-ui/react';
import { socialMediaImgs } from 'utils';

export const AddSocial = ({ id, channel }: AddSocialModel) => {
  return (
    <Center
      w={{ base: 'full', lg: '232px' }}
      minH='122px'
      bg='white'
      rounded='10px'
      gap='2'
    >
      <Image
        src={socialMediaImgs[channel]}
        alt={channel}
        quality={100}
        priority
      />

      <ColumnFlex gap='1'>
        <TandaHeading
          color={DEFAULT_STYLES.gray}
          {...textStyles.smallSubtitle}
          textTransform='capitalize'
        >
          {channel}
        </TandaHeading>

        <Button
          variant='text'
          onClick={() => {
            alert(id);
          }}
        >
          Add
        </Button>
      </ColumnFlex>
    </Center>
  );
};
