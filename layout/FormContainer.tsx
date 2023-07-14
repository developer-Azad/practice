import { BorderProps, Grid } from '@chakra-ui/react';
import { ColumnFlex, FormTitleStep } from 'components';
import { PageBodyContainer } from './PageBodyContainer';
import { LayoutProps } from 'models';
import { ReactNode } from 'react';

interface Props extends LayoutProps {
  title: ReactNode;
  currentStep: string;
  steps: string[];
  rounded?: BorderProps['rounded'];
}

export const FormContainer = ({
  title,
  currentStep,
  children,
  steps,
  rounded,
}: Props) => {
  return (
    <ColumnFlex w='full' gap='16'>
      <FormTitleStep title={title} currentStep={currentStep} steps={steps} />

      <PageBodyContainer alignSelf='center' maxW='1000px' rounded={rounded}>
        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            sm: 'repeat(2,1fr)',
          }}
          mx={{ base: '4', md: '5' }}
          w={{ base: '95%', lg: '862px' }}
          alignSelf='center'
          my='8'
          rowGap='9'
          columnGap='10'
          as='form'
        >
          {children}
        </Grid>
      </PageBodyContainer>
    </ColumnFlex>
  );
};
