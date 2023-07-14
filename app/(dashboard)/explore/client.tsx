'use client';
import { ExploreCard, PageHeader } from 'components';
import { PageBodyContainer } from 'layout';
import { ExploreType } from 'models';
import { exploreTypeBtns, useGlobalStore } from 'store';
import { DEFAULT_STYLES } from 'styles';
import { Badge, Button, Flex, Grid, HStack } from '@chakra-ui/react';
import { useState } from 'react';

export const ExploreClient = () => {
  const [selected, setSelected] = useState(ExploreType.Deals);
  const explore = useGlobalStore((s) => s.explore);

  const selectedChangeHandler = (str: ExploreType) => {
    setSelected(str);
  };

  const renderBtns = exploreTypeBtns.map((btn) => {
    const isActive = btn.title === selected;

    return (
      <Button
        key={btn.id}
        opacity={isActive ? 1 : 0.25}
        onClick={() => {
          selectedChangeHandler(btn.title);
        }}
      >
        {btn.title}
      </Button>
    );
  });

  const renderExploreData = explore?.map((data) => (
    <ExploreCard {...data} key={data.id} />
  ));

  return (
    <PageBodyContainer>
      <Flex layerStyle='spaced'>
        <PageHeader>
          {selected}
          <Badge bg='transparent' color={DEFAULT_STYLES.warning}>
            21
          </Badge>
        </PageHeader>

        <HStack bg={DEFAULT_STYLES.darkerGreen} p='6px 8px ' rounded='15px'>
          {renderBtns}
        </HStack>
      </Flex>

      <Grid
        gap='8'
        mt='8'
        mb='16'
        alignSelf={{
          base: 'center',
          '2xl': 'auto',
        }}
        w={{ base: '80%', sm: '90%', md: 'auto' }}
        templateColumns={{
          base: 'repeat(1,1fr)',
          sm: 'repeat(2,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
          xlg: 'repeat(4,1fr)',
          xl: 'repeat(3,1fr)',
          xxl: 'repeat(4,1fr)',
        }}
      >
        {renderExploreData}
      </Grid>
    </PageBodyContainer>
  );
};
