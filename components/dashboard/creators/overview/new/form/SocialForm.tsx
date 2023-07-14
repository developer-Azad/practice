import { ColumnFlex, Details, GridSharedSpan, TandaHeading } from 'components';
import { Grid } from '@chakra-ui/react';
import { socialAccounts } from 'store';
import { AddSocial } from '../shared';
import { textStyles } from 'styles';

export const SocialForm = () => {
  const renderSocialIcons = socialAccounts.map((social) => {
    return <AddSocial {...social} key={social.id} />;
  });

  return (
    <>
      <GridSharedSpan mb='10'>
        <Details
          title='Add your social media handles'
          desc={
            <>
              Connect as many accounts to help you pitch yourself to brands that
              are working with <br />
              creators similar to you
            </>
          }
        />
      </GridSharedSpan>

      <GridSharedSpan mb='16'>
        <ColumnFlex gap='6'>
          <TandaHeading {...textStyles.subtitle}>
            Mandatory (1 minimum)
          </TandaHeading>

          <Grid
            gridTemplateColumns={{
              base: 'repeat(1,1fr)',
              sm: 'repeat(2,1fr)',
              md: 'repeat(3,1fr)',
            }}
            gap='4'
            w={{ base: 'full', lg: 'max-content' }}
          >
            {renderSocialIcons}
          </Grid>
        </ColumnFlex>
      </GridSharedSpan>
    </>
  );
};
