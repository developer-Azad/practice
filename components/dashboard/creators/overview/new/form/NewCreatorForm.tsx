'use client';
import Link from 'next/link';
import {
  GridSharedSpan,
  InfoCard,
  ColumnFlex,
  Span,
  TandaHeading,
} from 'components';
import { CreatorFormStep } from 'models';
import { useNewCreatorStore, nextAndSubmit, userFormSteps } from 'store';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { creatorsFormInfoText, DashRoutes } from 'utils';
import { Flex, HStack, Icon, Button } from '@chakra-ui/react';
import { AiOutlineLock } from '@react-icons/all-files/ai/AiOutlineLock';
import { Authentication } from './Authentication';
import { DetailsForm } from './DetailsForm';
import { SelectBrand } from './SelectBrand';
import { SocialForm } from './SocialForm';
import { ReactNode, useEffect } from 'react';
import { FormContainer } from 'layout';
import { useDefaultContext } from 'context';

export const NewCreatorForm = () => {
  const step = useNewCreatorStore((s) => s.step);
  const showIdentity = useNewCreatorStore((s) => s.showIdentity);
  const { desc, title, header } = creatorsFormInfoText(step);
  const { updateDefaultProps } = useDefaultContext();

  const renderParts: Record<CreatorFormStep, ReactNode> = {
    [CreatorFormStep.One]: <DetailsForm />,
    [CreatorFormStep.Two]: <SocialForm />,
    [CreatorFormStep.Three]: <SelectBrand />,
    [CreatorFormStep.Four]: <Authentication />,
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, [step, showIdentity]);

  return (
    <FormContainer
      title={header}
      currentStep={step}
      steps={userFormSteps}
      rounded='none'
    >
      {renderParts[step]}

      <GridSharedSpan>
        <InfoCard title={title} desc={desc} header='Why do we need this?' />
      </GridSharedSpan>

      <GridSharedSpan mt='10'>
        <Flex layerStyle='spaced'>
          <HStack>
            <Icon as={AiOutlineLock} fontSize='1.3rem' />

            <ColumnFlex>
              <TandaHeading {...textStyles.bolderBody}>
                Secure, confidential connection <br />{' '}
                <Link href={DashRoutes.help}>
                  <Span color={DEFAULT_STYLES.lightYellow}>find out more</Span>
                </Link>
              </TandaHeading>
            </ColumnFlex>
          </HStack>

          <Button
            onClick={() => {
              nextAndSubmit(() => {
                updateDefaultProps(false, 'new');
              });
            }}
          >
            {step === CreatorFormStep.Four ? 'Start using Buxx' : 'Continue'}
          </Button>
        </Flex>
      </GridSharedSpan>
    </FormContainer>
  );
};
