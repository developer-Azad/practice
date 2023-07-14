import Image from 'next/image';
import gallery from 'assets/images/gallery.png';
import {
  ColumnFlex,
  GridSharedSpan,
  Span,
  TandaFlex,
  TandaInput,
  TandaMenuList,
  UploadBtn,
} from 'components';
import { SharedForm, ObjCard, PlatFormCard, Type } from './shared';
import { Box, Center, Circle, Grid } from '@chakra-ui/react';
import { DEFAULT_STYLES, layerStyles } from 'styles';
import {
  NewCampaignChangeHandler,
  brandMenuOpts,
  campaignBudgets,
  campaignObjs,
  campaignTypes,
  platforms,
  useNewCampaignStore,
} from 'store';
import { rgba } from 'utils';

export const CampaignDetailsForm = () => {
  const sharedMb = '16';
  const { name, budget } = useNewCampaignStore();
  const { onNameChange, onBudgetChange, onPriceRangeChange } =
    NewCampaignChangeHandler;

  const nameLen = name?.length ?? 0;

  const renderBudgetPrices = campaignBudgets.map((buds) => {
    return (
      <Center
        padding='11px 14px'
        key={buds}
        bg={rgba(DEFAULT_STYLES.altTextColor, 0.5)}
        rounded='30'
        textStyle='body'
        userSelect='none'
        cursor='pointer'
        onClick={() => {
          onBudgetChange(buds);
        }}
      >
        {`$${buds.toLocaleString()}`}
      </Center>
    );
  });

  return (
    <>
      {/* Select Brand */}
      <GridSharedSpan>
        <TandaFlex gap={{ base: '4', md: '8' }}>
          <Circle minW='105px' minH='105px' bg={DEFAULT_STYLES.lightGrayBg}>
            <Image src={gallery} alt='gallery' priority />
          </Circle>

          <SharedForm
            title='Brand'
            desc='Select or àdd a new brand for this campaign'
          >
            <TandaInput>
              <TandaMenuList
                btnText='Choose brand'
                list={brandMenuOpts}
                btnVariant='whiteBg'
                // Make reusable
                listProps={{
                  bg: 'white',
                  color: DEFAULT_STYLES.lightGrayBg,
                  rounded: '10',
                  border: `1px solid ${DEFAULT_STYLES.yellow}`,
                }}
              />
            </TandaInput>
          </SharedForm>
        </TandaFlex>
      </GridSharedSpan>

      {/* Campaign name */}
      <GridSharedSpan>
        <SharedForm
          title='Campaign name'
          desc='Enter a short name for your campaign. This is what creators will see'
        >
          <TandaInput
            rightElement={`${nameLen}/50`}
            inputProps={{
              maxLength: 50,
            }}
            onChange={(e) => {
              if (nameLen > 50) return;
              onNameChange(e);
            }}
          />
        </SharedForm>
      </GridSharedSpan>

      {/* Campaign objective */}
      <GridSharedSpan mb='12'>
        <SharedForm
          title='Campaign objective'
          desc='Choose the goal that best suits your campaign'
        >
          <Grid
            w='full'
            gridTemplateColumns={layerStyles.sharedGrid.gridTemplateColumns}
            columnGap='10'
            rowGap='7'
            alignItems='center'
          >
            {campaignObjs.map((objs) => (
              <ObjCard key={objs.id} obj={objs.value} desc={objs.desc} />
            ))}
          </Grid>
        </SharedForm>
      </GridSharedSpan>

      {/* Campaign type */}
      <GridSharedSpan mb={sharedMb}>
        <SharedForm
          title='Campaign type'
          desc='Choose  how you would like to collaborate wth creators based on your nedds'
        >
          <ColumnFlex w='full' gap='5'>
            {campaignTypes.map((type) => {
              return <Type {...type} key={type.id} />;
            })}
          </ColumnFlex>
        </SharedForm>
      </GridSharedSpan>

      {/* Platform */}
      <GridSharedSpan mb={sharedMb}>
        <SharedForm
          title='Platform'
          desc='Select the platform  that you plan to use the content for'
        >
          <Grid
            w='full'
            gridTemplateColumns={{
              ...layerStyles.sharedGrid.gridTemplateColumns,
              xl: 'repeat(4,1fr)',
            }}
            alignItems='center'
            gap='7'
          >
            {platforms.map((platform) => {
              return <PlatFormCard key={platform.id} name={platform.value} />;
            })}
          </Grid>
        </SharedForm>
      </GridSharedSpan>

      {/* campaign budget */}
      <GridSharedSpan mb={sharedMb}>
        <SharedForm
          title='Set campaign budget'
          desc={
            <ColumnFlex maxW='706px' gap='3'>
              <Span>
                “Choose what you want to spend on your campaign! The larger the
                budget, the more the quality and quantity of creators to hire.
                On Buxx, the minimum campaign budget is $400 and you can top-up
                anytime.
              </Span>

              <Span color={rgba(DEFAULT_STYLES.lightYellow, '0.7')}>
                Note: This campaign budget does not include creator licensing ad
                spend
              </Span>
            </ColumnFlex>
          }
        >
          <ColumnFlex w='full' gap='3'>
            <TandaInput
              onChange={(e) => {
                onBudgetChange(e);
              }}
              inputProps={{
                placeholder: '3,000',
                type: 'number',
              }}
              leftElement='$'
              value={budget}
            />

            <TandaFlex gap='4'>{renderBudgetPrices}</TandaFlex>
          </ColumnFlex>
        </SharedForm>
      </GridSharedSpan>

      {/* price range */}
      <GridSharedSpan mb={sharedMb}>
        <SharedForm
          title='Desired price range'
          desc={
            <Box maxW='521px'>
              Creators will not be able to request more than your indicated
              price cap. If you are not sure about prices right now, you may
              leave these blank.
              <Span
                bgGradient={DEFAULT_STYLES.yellowGradient}
                bgClip='text'
                cursor='pointer'
              >
                Read more
              </Span>
            </Box>
          }
        >
          <TandaFlex w='full' gap='2'>
            <TandaInput
              onChange={(e) => {
                onPriceRangeChange(e, 'from');
              }}
              inputProps={{
                placeholder: '100',
                type: 'number',
              }}
              rightElement='$'
            />

            <Box w='8' h='1px' bg='white' />

            <TandaInput
              onChange={(e) => {
                onPriceRangeChange(e, 'from');
              }}
              rightElement='$'
              inputProps={{
                placeholder: '100',
                type: 'number',
              }}
            />
          </TandaFlex>
        </SharedForm>
      </GridSharedSpan>

      {/* Product Image */}
      <GridSharedSpan>
        <TandaFlex
          gap={{ base: '4', md: '8' }}
          flexDirection={{ base: 'column', sm: 'row' }}
          align={{ base: 'flex-start', sm: 'center' }}
        >
          <Center
            minW='125px'
            minH='125px'
            maxW='125px'
            bg={DEFAULT_STYLES.lightGrayBg}
            rounded='10'
          >
            <Image src={gallery} alt='gallery' priority />
          </Center>

          <SharedForm
            title='Product image'
            desc='Upload a high quality picture of your product to attract the creator’s attention nd stand out against offers from other brands. The image must be 1200 x 500 pixels in PNG or JPEG format.'
          >
            <UploadBtn btnText='image' accept='image/*' />
          </SharedForm>
        </TandaFlex>
      </GridSharedSpan>
    </>
  );
};
