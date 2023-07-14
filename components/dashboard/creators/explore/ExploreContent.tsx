import {
  ColumnFlex,
  IconBtn,
  ImageAndTitle,
  LightGrayBgInfoCard,
  TandaFlex,
} from 'components';
import { socialMediaImgs } from 'utils';
import { Box, Text } from '@chakra-ui/react';
import { ExploreData } from 'models';
import { DEFAULT_STYLES } from 'styles';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Fragment, useState } from 'react';
import { ContentModal } from './ContentModal';

type Props = Pick<ExploreData, 'contents'>;

export const ExploreContent = ({ contents }: Props) => {
  const [id, setId] = useState<string>();

  const toggleModal = (id?: string) => {
    setId(id);
  };

  const renderContent = contents?.map((content, i) => {
    const data = content.id === id ? content : undefined;

    return (
      <Fragment key={`${i}_${content.title}`}>
        <TandaFlex
          {...DEFAULT_STYLES.darkHover}
          minH='82px'
          rounded='8px'
          padding='12px 16px'
          layerStyle='spaced'
          onClick={() => {
            toggleModal(content.id);
          }}
          cursor='pointer'
        >
          <ColumnFlex color={DEFAULT_STYLES.borderColor} gap='1.5'>
            <Text textStyle='body'>{content.title}</Text>

            <LightGrayBgInfoCard>{content.desc}</LightGrayBgInfoCard>
          </ColumnFlex>

          <IconBtn
            aria-label='action'
            icon={
              <MdOutlineArrowForwardIos color={DEFAULT_STYLES.borderColor} />
            }
          />
        </TandaFlex>

        <ContentModal data={data} onClose={toggleModal} />
      </Fragment>
    );
  });

  return (
    <ColumnFlex px='5' gap='4'>
      <Box mb='3'>
        <ImageAndTitle
          text='Content to create'
          textStyle='subtitle'
          stackProps={{ gap: '1.5' }}
          image={socialMediaImgs.tikTok}
          imageSize={{
            w: 24,
            h: 24,
          }}
        />
      </Box>

      {renderContent}
    </ColumnFlex>
  );
};
