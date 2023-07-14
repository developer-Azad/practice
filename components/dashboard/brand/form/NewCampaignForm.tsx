'use client';
import { Button, Icon } from '@chakra-ui/react';
import { GridSharedSpan, TandaFlex } from 'components';
import { FormContainer } from 'layout';
import { CampaignFormStep } from 'models';
import { ReactNode, useEffect } from 'react';
import {
  brandFormSteps,
  onBackClick,
  saveAndContinue,
  useNewCampaignStore,
} from 'store';
import { brandsFormInfoText, pxToRem } from 'utils';
import { CampaignDetailsForm } from './CampaignDetailsForm';
import { ProfileForm } from './ProfileForm';
import { BiArrowBack } from '@react-icons/all-files/bi/BiArrowBack';
import { MediaContentForm } from './MediaContentForm';

export const NewCampaignForm = () => {
  const step = useNewCampaignStore((s) => s.step);
  const header = brandsFormInfoText(step);

  useEffect(() => {
    scrollTo(0, 0);
  }, [step]);

  const renderParts: Record<CampaignFormStep, ReactNode> = {
    [CampaignFormStep.One]: <CampaignDetailsForm />,
    [CampaignFormStep.Two]: <ProfileForm />,
    [CampaignFormStep.Three]: <MediaContentForm />,
    [CampaignFormStep.Four]: <CampaignDetailsForm />,
  };

  return (
    <FormContainer
      title={header}
      currentStep={step}
      steps={brandFormSteps}
      rounded='none'
    >
      {renderParts[step]}

      <GridSharedSpan mt='10'>
        <TandaFlex w='full' justify='flex-end' gap='2.5'>
          {step !== CampaignFormStep.One && (
            <Button
              leftIcon={
                <Icon as={BiArrowBack} color='white' fontSize={pxToRem(16)} />
              }
              onClick={onBackClick}
              variant='grayBg'
            >
              Back
            </Button>
          )}
          <Button onClick={saveAndContinue}>Save & Continue</Button>
        </TandaFlex>
      </GridSharedSpan>
    </FormContainer>
  );
};
