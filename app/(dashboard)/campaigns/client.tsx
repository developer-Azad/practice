'use client';
import Link from 'next/link';
import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { BrandDataCard, PageHeader, TandaMenuList, Welcome } from 'components';
import { PageBodyContainer } from 'layout';
import { CampaignCategory } from 'models';
import { useState } from 'react';
import { IoMdAddCircleOutline } from '@react-icons/all-files/io/IoMdAddCircleOutline';
import { brandMenuOpts } from 'store';
import { DEFAULT_STYLES } from 'styles';
import { DashRoutes, pxToRem } from 'utils';

export const CampaignsClient = () => {
  const [selected, setSelected] = useState(CampaignCategory.Active);

  return (
    <>
      {false ? (
        <Link href={DashRoutes.newCampaign}>
          <Welcome
            desc='“Launch your first content campaign, collaborate with creators for organic posting and run whitelisted ads – all in one place”'
            btnText='Create Campaign'
          />
        </Link>
      ) : (
        <PageBodyContainer>
          <Flex layerStyle='spaced'>
            <PageHeader>{selected} Campaigns</PageHeader>

            <HStack gap='3'>
              <Box display={{ base: 'none', sm: 'inline-block' }} w='150px'>
                <TandaMenuList
                  btnText={selected}
                  list={brandMenuOpts}
                  selected={selected}
                  btnVariant='grayBg'
                  listProps={{
                    bg: DEFAULT_STYLES.lightGrayBg,
                    color: 'white',
                    minW: '150px !important',
                  }}
                  onChange={(_, val) => {
                    setSelected(val as CampaignCategory);
                  }}
                />
              </Box>

              <Link href={DashRoutes.newCampaign}>
                <Button
                  variant='noBg'
                  leftIcon={<IoMdAddCircleOutline fontSize={pxToRem(20)} />}
                >
                  New campaign
                </Button>
              </Link>
            </HStack>
          </Flex>

          <BrandDataCard />
        </PageBodyContainer>
      )}
    </>
  );
};
