import {
  ColumnFlex,
  DashButton,
  DashContainer,
  Details,
  GridSharedSpan,
  IconBtn,
  TandaFlex,
  TandaHDivider,
  TandaHeading,
} from 'components';
import { RiAddFill } from '@react-icons/all-files/ri/RiAddFill';
import { RiFileCopyLine } from '@react-icons/all-files/ri/RiFileCopyLine';
import { RiDeleteBin6Line } from '@react-icons/all-files/ri/RiDeleteBin6Line';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { useState } from 'react';
import { Box, Button, Icon } from '@chakra-ui/react';
import { pxToRem } from 'utils';

export const MediaContentForm = () => {
  const [showMedia, setShowMedia] = useState(false);

  return (
    <>
      <GridSharedSpan>
        <ColumnFlex gap='8'>
          <TandaHeading
            {...textStyles.subtitle}
            fontWeight={500}
            px={{ base: '0', lg: '5' }}
          >
            Add a separate asset for every creative that you want creators to
            deliver.
          </TandaHeading>

          {showMedia && (
            <DashContainer rounded='40px' gap='9'>
              <Details
                headTextStyle='subtitle'
                textStyle='desc'
                title='Media type'
                desc='Select the type of creative asset you want doe this campaign'
              />

              <ColumnFlex flex='1' border='1px solid red'></ColumnFlex>

              <TandaHDivider border={DEFAULT_STYLES.border} />
              <TandaFlex
                w='max-content'
                alignSelf='center'
                gap='5'
                h='50px'
                align='stretch'
              >
                <IconBtn
                  aria-label='Copy'
                  icon={
                    <Icon
                      as={RiFileCopyLine}
                      color={DEFAULT_STYLES.lightGrayBg}
                      fontSize={pxToRem(18)}
                    />
                  }
                  w='44px'
                  bg={DEFAULT_STYLES.altTextColor}
                />

                <IconBtn
                  aria-label='Copy'
                  icon={
                    <Icon
                      as={RiDeleteBin6Line}
                      color={DEFAULT_STYLES.lightGrayBg}
                      fontSize={pxToRem(18)}
                    />
                  }
                  w='44px'
                  bg={DEFAULT_STYLES.altTextColor}
                />

                <Button w='324px' size='lgPadding'>
                  Save
                </Button>
              </TandaFlex>
            </DashContainer>
          )}

          <Box px={{ base: '0', lg: '5' }}>
            <DashButton
              icon={RiAddFill}
              text={`${showMedia ? 'Remove' : 'Add'} creative`}
              minH='120px'
              onClick={() => setShowMedia((p) => !p)}
            />
          </Box>
        </ColumnFlex>
      </GridSharedSpan>
    </>
  );
};
