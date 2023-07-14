import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  ColumnFlex,
  ModalContainer,
  Span,
  TandaFlex,
  TandaHDivider,
} from 'components';
import { flowModalBtns } from 'store';
import { DEFAULT_STYLES, layerStyles } from 'styles';
import { Button, Grid, Icon, Text } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { FlowData, FlowModalPart, FlowType } from 'models';
import { Chat } from './chat';
import { Timeline } from './timeline';
import { PriceModal } from './PriceModal';

const SharedPortal = dynamic(() =>
  import('components').then((mod) => mod.SharedPortal)
);

interface Props {
  onClose?: () => void;
  id?: string;
  data?: FlowData[];
  type: FlowType;
}

// ? Check modal structure in employer also
export const FlowModal = ({ onClose, id, data, type }: Props) => {
  const [part, setPart] = useState<FlowModalPart>('timeline');
  const [openPriceModal, setOpenPriceModal] = useState(false);

  const res = data?.find((e) => e.id === id);
  const show = !!res;

  const renderBtns = flowModalBtns.map((btn) => {
    const isActive = btn.name === part;

    return (
      <Button
        key={btn.id}
        leftIcon={
          <Icon
            as={btn.icon}
            fontSize='1.2rem'
            color={
              isActive ? DEFAULT_STYLES.deepGreen : DEFAULT_STYLES.borderColor
            }
          />
        }
        variant={isActive ? 'bg' : 'transparent'}
        textTransform='capitalize'
        onClick={() => {
          setPart(btn.name);
        }}
      >
        {btn.name}
      </Button>
    );
  });

  const renderParts: Record<FlowModalPart, ReactNode> = {
    timeline: <Timeline data={res?.timeline} type={type} />,
    chat: <Chat />,
  };

  const togglePriceModal = () => {
    setOpenPriceModal((p) => !p);
  };

  return (
    <>
      <SharedPortal show={show} justify='center' onClose={onClose}>
        {show && (
          <ModalContainer
            w={{ base: 'full', sm: '390px' }}
            minH={DEFAULT_STYLES.fullHeight}
            maxH={DEFAULT_STYLES.fullHeight}
            alignSelf='flex-end'
          >
            <Grid
              templateColumns={DEFAULT_STYLES.gridTemplate.md}
              bg={DEFAULT_STYLES.darkerGreen}
              rounded='5px'
              p='3'
              gap='5'
              mx={DEFAULT_STYLES.sharedPx}
            >
              {renderBtns}
            </Grid>

            <TandaHDivider />

            <ColumnFlex
              flex='1'
              overflowY='auto'
              gap={layerStyles.modal.gap}
            >
              <TandaFlex
                mx={DEFAULT_STYLES.sharedPx}
                bg={DEFAULT_STYLES.darkerGrayHover}
                minH='84px'
                rounded='8'
                p='4'
                gap='4'
              >
                <Image src={res.info.icon} alt='info' />

                <Text
                  textStyle='body'
                  fontWeight={DEFAULT_STYLES.semibold}
                  maxW='180px'
                >
                  {res.info.location}{' '}
                  <Span
                    color={DEFAULT_STYLES.lightYellow}
                    cursor='pointer'
                    onClick={togglePriceModal}
                  >
                    . lódiel
                  </Span>
                </Text>
              </TandaFlex>

              {renderParts[part]}
            </ColumnFlex>
          </ModalContainer>
        )}
      </SharedPortal>

      <PriceModal isOpen={openPriceModal} onClose={togglePriceModal} />
    </>
  );
};
