import {
  BarChart,
  ColumnFlex,
  GrayCard,
  TandaFlex,
  TandaHeading,
  UserBalance,
} from 'components';
import { referralData, invoicesData, channelData, currencyData } from 'store';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { ArrowUpDownIcon } from '@chakra-ui/icons';
import {
  Button,
  CircularProgress,
  Flex,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { ChannelData } from './ChannelData';
import { CurrencyCard } from './CurrencyCard';
import { useDefaultContext } from 'context';
import { GridContainer, PageBodyContainer } from 'layout';
import { FlowCard } from './FlowCard';
import { DataCard } from './DataCard';

export const ExistingPage = () => {
  const { updateDefaultProps } = useDefaultContext();

  const renderCurrencyBalance = currencyData.map((e) => {
    return <CurrencyCard key={e.id} {...e} />;
  });

  const renderSubs = channelData.map((e) => {
    return <ChannelData {...e} key={e.id} />;
  });

  const sharedCircularStyles = (isActive?: boolean) => {
    return {
      size: '71px',
      color: 'rgba(66, 132, 254, 1)',
      opacity: isActive ? 1 : 0.2,
      thickness: '15px',
      trackColor: '#E7E45F',
    };
  };

  return (
    <PageBodyContainer>
      <UserBalance />

      <Button
        alignSelf='flex-start'
        onClick={() => {
          updateDefaultProps(true, 'new');
        }}
      >
        Show New
      </Button>

      <ColumnFlex gap='70px' pb='100px'>
        <GridContainer>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <ColumnFlex
              layerStyle='card'
              minH='full'
              gap={{ base: '5', md: '0' }}
            >
              <TandaFlex w='full' layerStyle='spaced'>
                <TandaHeading {...textStyles.bolderBody}>CASHFLOW</TandaHeading>

                <GrayCard
                  text='6 months'
                  icon={
                    <ArrowUpDownIcon
                      color='#A3A7B7'
                      fontSize={DEFAULT_STYLES.desc}
                    />
                  }
                />
              </TandaFlex>

              <FlowCard />
              <BarChart />
            </ColumnFlex>
          </GridItem>

          <ColumnFlex layerStyle='card' alignSelf='flex-start'>
            <TandaHeading
              {...textStyles.smallSubtitle}
              color={DEFAULT_STYLES.borderColor}
              mb='5'
            >
              CURRENCY BALANCE
            </TandaHeading>

            {renderCurrencyBalance}
          </ColumnFlex>
        </GridContainer>

        <Flex w='full' layerStyle='spaced' mt='5'>
          <TandaHeading {...textStyles.subtitle}>
            Activity & Platforms
          </TandaHeading>

          <Button>Connect a channel</Button>
        </Flex>

        <GridContainer>
          <GridItem
            colSpan={{ base: 1, lg: 2 }}
            display='grid'
            gridTemplateColumns={{
              base: 'repeat(1,1fr)',
              lg: 'repeat(2,1fr)',
            }}
            alignSelf='flex-start'
            gap='30px'
          >
            <DataCard
              title='Total referrals'
              data={referralData}
              progress={
                <CircularProgress
                  value={30}
                  {...sharedCircularStyles()}
                  position='relative'
                />
              }
            />

            <DataCard
              title='Total invoices'
              showBtn
              data={invoicesData}
              progress={
                <CircularProgress value={50} {...sharedCircularStyles(true)} />
              }
            />
          </GridItem>

          <GridItem colSpan={1}>
            <ColumnFlex layerStyle='card' minH='230px'>
              <TandaHeading
                {...textStyles.bolderBody}
                color={DEFAULT_STYLES.borderColor}
              >
                Channels stats
              </TandaHeading>

              <Flex layerStyle='spaced' mt='2.5'>
                <Text textStyle='tiny'>Channel</Text>
                <Text textStyle='tiny'>Subs/followers</Text>
              </Flex>

              <ColumnFlex gap='3' mt='3.5'>
                {renderSubs}
              </ColumnFlex>
            </ColumnFlex>
          </GridItem>
        </GridContainer>
      </ColumnFlex>
    </PageBodyContainer>
  );
};
