'use client';
import { FlowDataCard, PageHeader } from 'components';
import { PageBodyContainer } from 'layout';
import { flowData } from 'store';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

export const FlowClient = () => {
  const renderFlowCards = flowData.map((flow) => (
    <FlowDataCard key={flow.id} {...flow} />
  ));

  return (
    <PageBodyContainer>
      <Flex layerStyle='spaced'>
        <PageHeader>Campaign flow</PageHeader>

        <Box w='171px'>
          <InputGroup variant='gray'>
            <InputLeftElement pointerEvents='none'>
              <SearchIcon />
            </InputLeftElement>
            <Input />
          </InputGroup>
        </Box>
      </Flex>

      <Grid
        minW='full'
        templateColumns='repeat(6,1fr)'
        mt='7'
        columnGap='8'
        overflowX='auto'
        rowGap='10'
        pb='5'
      >
        {renderFlowCards}
      </Grid>
    </PageBodyContainer>
  );
};
