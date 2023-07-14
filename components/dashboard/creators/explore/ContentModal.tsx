import dynamic from 'next/dynamic';
import {
  ColumnFlex,
  IconBtn,
  TandaHDivider,
  GradientBorderBtn,
  ModalContainer,
  TandaHeading,
} from 'components';
import { Content } from 'models';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { CloseIcon } from '@chakra-ui/icons';
import { Box, Grid, Icon, Text, VStack } from '@chakra-ui/react';

const SharedPortal = dynamic(() =>
  import('components').then((mod) => mod.SharedPortal)
);

interface Props {
  onClose?: () => void;
  data?: Content;
}

export const ContentModal = ({ onClose, data }: Props) => {
  const show = !!data;

  const renderDetails = data?.details.map((e, i) => {
    return (
      <ColumnFlex key={`${i}_${e.title}`} gap='3'>
        <TandaHeading {...textStyles.subtitle}>{e.title}</TandaHeading>
        <Text textStyle='body'>{e.desc}</Text>
      </ColumnFlex>
    );
  });

  const renderReqs = data?.requirements?.map((e, i) => {
    return (
      <ColumnFlex
        key={`${i}_${e.title}`}
        rounded='8px'
        padding='12px 16px'
        bg={DEFAULT_STYLES.darkerGray}
        _hover={{
          bg: DEFAULT_STYLES.darkerGrayHover,
        }}
        gap='3'
        cursor='pointer'
      >
        <Icon as={e.icon} fontSize='1.2rem' />
        <Text textStyle='body'>{e.title}</Text>
      </ColumnFlex>
    );
  });

  return (
    <SharedPortal show={show} justify='center' align='center' onClose={onClose}>
      {show && (
        <ModalContainer
          w={{ base: '90%', sm: '415px' }}
          minH='570px'
          position='fixed'
          pb='5'
          right={{ base: undefined, lg: '420px' }}
          gap='4'
          alignSelf='center'
          rounded='14px'
        >
          <IconBtn
            aria-label='Close button'
            icon={<CloseIcon color='white' />}
            onClick={onClose}
            position='absolute'
            right='5'
            top='4'
          />

          <TandaHeading
            px={DEFAULT_STYLES.sharedPx}
            {...textStyles.subHeader}
            mt='10'
          >
            {data.title}
          </TandaHeading>

          <VStack gap='4' mt='2' px={DEFAULT_STYLES.sharedPx}>
            {renderDetails}
          </VStack>

          <ColumnFlex gap='4' mt='2' px={DEFAULT_STYLES.sharedPx} mb='5'>
            <TandaHeading {...textStyles.subtitle}> Requirements</TandaHeading>

            <Grid templateColumns={DEFAULT_STYLES.gridTemplate.md} gap='4'>
              {renderReqs}
            </Grid>
          </ColumnFlex>

          <TandaHDivider />

          <Box px={DEFAULT_STYLES.sharedPx} mt='2'>
            <GradientBorderBtn onClick={onClose}>Close</GradientBorderBtn>
          </Box>
        </ModalContainer>
      )}
    </SharedPortal>
  );
};
