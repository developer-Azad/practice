import { ChannelModel } from 'models';
import { Flex, HStack, Text } from '@chakra-ui/react';
import { socialMediaImgs } from 'utils';
import { ColumnFlex, IconBtn, ImageAndTitle, TandaHDivider } from 'components';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { DEFAULT_STYLES } from 'styles';

export const ChannelData = ({ channel, subscriptions }: ChannelModel) => {
  return (
    <ColumnFlex gap='2'>
      <Flex layerStyle='spaced'>
        <ImageAndTitle
          stackProps={{
            gap: '0.5',
          }}
          text={channel}
          image={socialMediaImgs[channel]}
          textStyle='tiny'
        />

        <HStack gap='7'>
          <Text textStyle='tiny'>{subscriptions}</Text>

          <IconBtn
            aria-label='Forward'
            icon={
              <ChevronRightIcon
                color={DEFAULT_STYLES.borderColor}
                fontSize='1.25rem'
              />
            }
          />
        </HStack>
      </Flex>

      <TandaHDivider />
    </ColumnFlex>
  );
};
