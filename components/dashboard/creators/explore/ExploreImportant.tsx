import {
  ColumnFlex,
  IconBtn,
  LightGrayBgInfoCard,
  TandaFlex,
  TandaHeading,
} from 'components';
import { ExploreData } from 'models';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { Grid, Icon, Text } from '@chakra-ui/react';
import { BsFolder } from '@react-icons/all-files/bs/BsFolder';

type Props = Pick<ExploreData, 'important'>;

export const ExploreImportant = ({ important }: Props) => {
  const renderOpts = important.map((opts, i) => {
    return (
      <ColumnFlex
        key={`${i}_${opts.title}`}
        rounded='8px'
        padding='12px 16px'
        bg={DEFAULT_STYLES.darkerGray}
        _hover={{
          bg: DEFAULT_STYLES.darkerGrayHover,
        }}
        gap='3'
        cursor='pointer'
      >
        <Icon as={opts.icon} />
        <Text textStyle='body'> {opts.title}</Text>
      </ColumnFlex>
    );
  });

  return (
    <ColumnFlex gap='3' px='5' mb='5'>
      <TandaHeading {...textStyles.subtitle}>Important</TandaHeading>

      <Grid templateColumns={DEFAULT_STYLES.gridTemplate.md} gap='4'>
        {renderOpts}
      </Grid>

      <TandaFlex
        bg={DEFAULT_STYLES.darkerGray}
        _hover={{
          bg: DEFAULT_STYLES.darkerGrayHover,
        }}
        rounded='8px'
        padding='12px 16px'
        layerStyle='spaced'
      >
        <ColumnFlex color={DEFAULT_STYLES.borderColor} gap='1.5'>
          <Text textStyle='body'>Technical requirements</Text>

          <LightGrayBgInfoCard>
            File formats, video rendering etc
          </LightGrayBgInfoCard>
        </ColumnFlex>

        <IconBtn
          aria-label='action'
          icon={
            <BsFolder color={DEFAULT_STYLES.borderColor} fontSize='1.1rem' />
          }
        />
      </TandaFlex>
    </ColumnFlex>
  );
};
