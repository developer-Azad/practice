import Image from 'next/image';
import test1 from 'assets/images/test2.png';
import pasting from 'assets/images/pasting.png';
import eyes from 'assets/images/eyes.png';
import messages from 'assets/images/messages.png';
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import {
  ColumnFlex,
  Desc,
  IconText,
  ImageAndTitle,
  Span,
  TandaFlex,
  TandaHeading,
} from 'components';
import { DEFAULT_STYLES, inter, textStyles } from 'styles';
import { pxToRem, rgba, sharedIcons } from 'utils';
import { IProps, ImageModel } from 'models';
import { BiDotsVerticalRounded } from '@react-icons/all-files/bi/BiDotsVerticalRounded';
import { BsEye } from '@react-icons/all-files/bs/BsEye';

export const BrandDataCard = () => {
  return (
    <Flex
      border={DEFAULT_STYLES.dimBorder}
      rounded='10'
      minH={pxToRem(421)}
      gap='4'
    >
      <ColumnFlex
        w={pxToRem(328)}
        minH='full'
        borderRight='1px solid #ECECEC'
        pos='relative'
        justify='flex-end'
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bg: 'linear-gradient(180deg, rgba(0, 37, 3, 0) 0%, #1E2733 76.04%)',
          rounded: '0 0 0 10px',
        }}
      >
        <Image src={test1} alt='test1' fill quality={100} />

        <ColumnFlex zIndex={2} m='4' className={inter.className} gap='4'>
          <TandaHeading {...textStyles.title}>Rik “So Good”</TandaHeading>

          <TandaFlex gap='2.5'>
            <IconText icon={sharedIcons['instagram']} text='Instagram' />
            <IconText icon={sharedIcons['creative']} text='Creative' />
          </TandaFlex>

          <ColumnFlex gap='1.5'>
            <Desc fontWeight={700}>Total Budget</Desc>

            <Box
              w='90%'
              h='10px'
              bg={rgba(DEFAULT_STYLES.lightYellow, 0.3)}
              rounded='10'
            >
              <Box
                w='70%'
                bg={DEFAULT_STYLES.yellowGradient}
                rounded='10'
                h='full'
              />
            </Box>
          </ColumnFlex>

          <Text textStyle='body'>
            <Span textStyle='bolderBody'>$35000</Span> I can’t see what written
            here
          </Text>
        </ColumnFlex>
      </ColumnFlex>

      <ColumnFlex flex='1' py='7' px='4' gap='8'>
        <TandaFlex layerStyle='spaced'>
          <TandaHeading {...textStyles.subtitle}>
            Launched 23/04/2023
          </TandaHeading>

          <Menu>
            <MenuButton>
              <Icon as={BiDotsVerticalRounded} fontSize={pxToRem(22)} />
            </MenuButton>

            <MenuList>
              <MenuItem>New Tab</MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File...</MenuItem>
            </MenuList>
          </Menu>
        </TandaFlex>

        <Grid templateColumns={DEFAULT_STYLES.gridTemplate.lg}>
          <ColumnFlex gap='8'>
            <InfoCard title='Application' desc='131' />
            <InfoCard title='Hired' desc='10' />
            <InfoCard title='Completed' desc='3' />
          </ColumnFlex>

          <ColumnFlex gap='8'>
            <InfoCard title='Campaign Type' desc='Posting' icon={pasting} />
            <InfoCard title='Review' desc='2' icon={eyes} />
            <InfoCard title='Completed' desc='32' icon={messages} />
          </ColumnFlex>

          <ColumnFlex gap='22px'>
            <InfoCard title='Creators' />

            <CreatorCard />
            <CreatorCard />
            <CreatorCard />

            <Button variant='grayBg' w='max-content' rounded='46px'>
              View more
            </Button>
          </ColumnFlex>
        </Grid>
      </ColumnFlex>
    </Flex>
  );
};

interface InfoProps extends IProps, Partial<ImageModel> {}

const InfoCard = ({ title, desc, icon }: InfoProps) => {
  return (
    <ColumnFlex gap='0.5'>
      <TandaHeading {...textStyles.subtitle} fontWeight={400}>
        {title}
      </TandaHeading>

      {(desc || icon) && (
        <TandaFlex gap='2'>
          {icon && <Image src={icon} alt='' />}

          {desc && (
            <TandaHeading {...textStyles.subHeader} fontWeight={700}>
              {desc}
            </TandaHeading>
          )}
        </TandaFlex>
      )}
    </ColumnFlex>
  );
};

const CreatorCard = () => {
  return (
    <TandaFlex gap='2.5'>
      <Box pos='relative' w='46px' h='46px'>
        <Image
          src='https://bit.ly/ryan-florence'
          alt=''
          fill
          style={{
            borderRadius: '23px',
          }}
        />
        <ColumnFlex
          layerStyle='centered'
          w='14px'
          pos='absolute'
          bottom='0'
          right='0.5'
          zIndex={2}
          h='14px'
          rounded='full'
          bg={DEFAULT_STYLES.pink}
        >
          <Box h='4px' w='4px' rounded='2' bg='white' />
        </ColumnFlex>
      </Box>

      <ColumnFlex>
        <TandaHeading
          {...textStyles['title']}
          fontWeight={DEFAULT_STYLES.semibold}
          fontSize={pxToRem(25)}
        >
          @simibs
        </TandaHeading>

        <ImageAndTitle
          icon={BsEye}
          text='234 views'
          textStyle='bolderBody'
          stackProps={{
            gap: '1',
          }}
        />
      </ColumnFlex>
    </TandaFlex>
  );
};