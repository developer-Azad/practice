import dynamic from 'next/dynamic';
import {
  ColumnFlex,
  GradientBorderBtn,
  TandaInput,
  TandaFlex,
  ModalContainer,
  Desc,
  TandaHDivider,
  TandaHeading,
} from 'components';
import { useGlobalStore } from 'store';
import { DEFAULT_STYLES, layerStyles, textStyles } from 'styles';
import { Button, Grid, Icon, Switch, Textarea } from '@chakra-ui/react';
import { IoIosSend } from '@react-icons/all-files/io/IoIosSend';
import { useState } from 'react';

const SharedPortal = dynamic(() =>
  import('components').then((mod) => mod.SharedPortal)
);

interface Props {
  onClose?: () => void;
  id?: string;
}

export const ExploreFormModal = ({ onClose, id }: Props) => {
  const [desc, setDesc] = useState('');
  const [showAddress, setShowAddress] = useState(false);
  const data = useGlobalStore((s) => s.explore)?.find((e) => e.id === id);
  const show = !!data;

  return (
    <SharedPortal show={show} justify='center' onClose={onClose}>
      {show && (
        <ModalContainer
          w={{ base: '90%', sm: '466px' }}
          minH='570px'
          rounded='14px'
          placeSelf='center'
        >
          <TandaHeading {...textStyles.subHeader} px={DEFAULT_STYLES.sharedPx}>
            Make Your Application
          </TandaHeading>

          <ColumnFlex
            px={DEFAULT_STYLES.sharedPx}
            gap={layerStyles.modal.gap}
            pt='3'
            flex='1'
          >
            <TandaInput
              onChange={() => {}}
              label='Price Limit #50,000 - #100,000'
              inputProps={{
                variant: 'dark',
                placeholder: 'Offer price',
                type: 'number',
              }}
            />

            <TandaInput
              label='Why are you a good fit for this campaign?'
              helperText={`${desc.length}/120`}
            >
              <Textarea
                placeholder={
                  'Not sure what to write? Here are a few starters:\n \n- Tell us about yourself \n - Have you tried the product/service before? Tell us about it \n - If you have a creative vision, give us a sneak peak \n - Why is this product/service relevant for your followers \n - Above all else, be authentic and have fun with your message!'
                }
                resize='none'
                minH='142px'
                variant='dark'
                maxLength={120}
                value={desc}
                onChange={(e) => {
                  if (desc.length > 120) return;
                  setDesc(e.target.value);
                }}
              />
            </TandaInput>

            <ColumnFlex gap='3'>
              <TandaFlex gap='2'>
                <Switch
                  size='sm'
                  isChecked={showAddress}
                  onChange={(e) => {
                    setShowAddress(e.target.checked);
                  }}
                />
                <Desc>Use current address for product shipping</Desc>
              </TandaFlex>

              {!showAddress && (
                <TandaInput
                  onChange={() => {}}
                  inputProps={{
                    placeholder: 'Enter address for shipping',
                    variant: 'dark',
                  }}
                />
              )}
            </ColumnFlex>
          </ColumnFlex>

          <TandaHDivider />

          <Grid
            templateColumns={DEFAULT_STYLES.gridTemplate.md}
            gap='3'
            px={DEFAULT_STYLES.sharedPx}
          >
            <GradientBorderBtn onClick={onClose}>Close</GradientBorderBtn>

            <Button
              rightIcon={<Icon as={IoIosSend} fontSize='1.1rem' />}
              onClick={() => {
                alert('Pitch sent successfully');
              }}
            >
              Send pitch
            </Button>
          </Grid>
        </ModalContainer>
      )}
    </SharedPortal>
  );
};
