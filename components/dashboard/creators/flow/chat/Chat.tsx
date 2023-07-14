import { Box, Button, VStack } from '@chakra-ui/react';
import {
  ColumnFlex,
  Desc,
  IconBtn,
  TandaFlex,
  TandaHDivider,
  TandaHeading,
  TandaInput,
} from 'components';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { DEFAULT_STYLES, layerStyles, textStyles } from 'styles';
import { getDay, pxToRem } from 'utils';

export const Chat = () => {
  return (
    <ColumnFlex gap={layerStyles.modal.gap}>
      {/* Chat -space */}
      <ColumnFlex mx={DEFAULT_STYLES.sharedPx} gap={layerStyles.modal.gap}>
        <VStack>
          <TandaHeading {...textStyles.smallSubtitle}>
            {getDay('long')}
          </TandaHeading>

          <Desc textAlign='center'>
            Your request to participate in a campaign is pending brand review.
            Offer price - N0
          </Desc>
        </VStack>

        <Box
          bg={DEFAULT_STYLES.darkerGrayHover}
          textStyle='desc'
          minH='93px'
          rounded='5'
          px='4'
          py='2'
          maxW='265px'
          alignSelf='flex-end'
        >
          Lorem ipsum dolor sit amet consectetur. In quam velit placerat amet.
          Volutpat volutpat quis sapien mi senectus dui pellentesque vitae nunc.
          Suspendisse est pellentesq
        </Box>
      </ColumnFlex>

      <TandaHDivider />

      <ColumnFlex mx={DEFAULT_STYLES.sharedPx} gap='1'>
        <TandaInput
          inputProps={{
            variant: 'transparent',
            placeholder: 'Message....',
            px: 0,
          }}
          onChange={(e) => {
            console.log(e);
          }}
        />

        <TandaFlex layerStyle='spaced'>
          <TandaFlex gap='2'>
            <Button
              variant='transparent'
              fontWeight={DEFAULT_STYLES.bold}
              p='0'
            >
              Aa
            </Button>

            <IconBtn
              aria-label='add'
              icon={
                <MdOutlineAddCircleOutline
                  color={DEFAULT_STYLES.borderColor}
                  fontSize='1.1rem'
                />
              }
            />

            <Button
              variant='noBg'
              fontWeight={DEFAULT_STYLES.bold}
              p='1'
              rounded='3'
              fontSize={pxToRem(8)}
            >
              SO
            </Button>
          </TandaFlex>
          <Button variant='transparent' border={DEFAULT_STYLES.border}>
            Send
          </Button>
        </TandaFlex>
      </ColumnFlex>

      <TandaHDivider />
    </ColumnFlex>
  );
};
