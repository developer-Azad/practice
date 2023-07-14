import dynamic from 'next/dynamic';
import Image from 'next/image';
import sideLogo from 'assets/images/buxx2.png';
import {
  ColumnFlex,
  TandaHDivider,
  TandaFlex,
  GradientBorderBtn,
  IconBtn,
  ModalContainer,
  LinkIconContainer,
} from 'components';
import { DEFAULT_STYLES, layerStyles } from 'styles';
import { Box, Button, Grid, Icon } from '@chakra-ui/react';
import { IoIosSend } from '@react-icons/all-files/io/IoIosSend';
import { ExploreHeader } from './ExploreHeader';
import { DeleteIcon } from '@chakra-ui/icons';
import { ExploreListComp } from './ExploreList';
import { ExploreContent } from './ExploreContent';
import { ExploreDesc } from './ExploreDesc';
import { ExploreImportant } from './ExploreImportant';
import { useGlobalStore } from 'store';

const SharedPortal = dynamic(() =>
  import('components').then((mod) => mod.SharedPortal)
);

interface Props {
  onClose?: () => void;
  id?: string;
}

export const ExploreModal = ({ onClose, id }: Props) => {
  const sharedP = '5';
  const data = useGlobalStore((s) => s.explore)?.find((e) => e.id === id);
  const show = !!data;

  return (
    <SharedPortal show={show} justify='center' onClose={onClose}>
      {show && (
        <ModalContainer
          w={{ base: 'full', sm: '390px' }}
          minH={DEFAULT_STYLES.fullHeight}
          maxH={DEFAULT_STYLES.fullHeight}
          alignSelf='flex-end'
        >
          <ColumnFlex
            flex='1'
            overflowY='auto'
            gap={layerStyles.modal.gap}
          >
            <TandaFlex layerStyle='spaced' px={sharedP}>
              <ExploreHeader
                title={data.title}
                icon={data.icon}
                textStyle='subHeader'
              />

              <IconBtn
                icon={<DeleteIcon color='white' />}
                onClick={onClose}
                aria-label='delete'
              />
            </TandaFlex>

            <Box px={sharedP}>
              <ExploreListComp list={data.list} />
            </Box>

            <TandaHDivider />

            <ExploreDesc desc={data.desc} />

            <ColumnFlex px={sharedP} gap='2'>
              <Image src={sideLogo} alt='Buxx' />

              <LinkIconContainer href='https://www.lightteacampaign.com'>
                www.lightteacampaign.com
              </LinkIconContainer>
            </ColumnFlex>

            <TandaHDivider />

            <ExploreContent contents={data.contents} />

            <TandaHDivider />

            <ExploreImportant important={data.important} />
          </ColumnFlex>

          <TandaHDivider />

          <Grid
            templateColumns={DEFAULT_STYLES.gridTemplate.md}
            px={sharedP}
            gap='6'
          >
            <GradientBorderBtn onClick={onClose}>Close</GradientBorderBtn>

            <Button rightIcon={<Icon as={IoIosSend} fontSize='1.1rem' />}>
              Pitch
            </Button>
          </Grid>
        </ModalContainer>
      )}
    </SharedPortal>
  );
};
