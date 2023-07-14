import {
  CampaignFormStep,
  CampaignType,
  Gender,
  Objective,
  SocialMedia,
} from 'models';
import { useNewCampaignStore } from '../state';
import { brandFormSteps } from '../data';

export class NewCampaignChangeHandler {
  static onStepChange = (step: CampaignFormStep) => {
    useNewCampaignStore.setState(() => ({
      step,
    }));
  };

  static onNameChange = (name: string) => {
    useNewCampaignStore.setState(() => ({
      name,
    }));
  };

  static onObjChange = (obj: Objective) => {
    useNewCampaignStore.setState((s) => ({
      objective: s.objective === obj ? undefined : obj,
    }));
  };

  static onTypeChange = (type: CampaignType) => {
    useNewCampaignStore.setState((s) => ({
      type: s.type === type ? undefined : type,
    }));
  };

  static onPlatFormChange = (platform: SocialMedia) => {
    useNewCampaignStore.setState((s) => ({
      platform: s.platform === platform ? undefined : platform,
    }));
  };

  static onBudgetChange = (budget: number) => {
    useNewCampaignStore.setState(() => ({
      budget,
    }));
  };

  static onLocationChange = (loc: string) => {
    useNewCampaignStore.setState(() => ({
      location: loc,
    }));
  };

  static onGenderChange = (gender: Gender) => {
    useNewCampaignStore.setState(() => ({
      gender,
    }));
  };

  static onPriceRangeChange = (value: number, type: 'from' | 'to') => {
    useNewCampaignStore.setState(() => ({
      range: {
        [type]: value,
      },
    }));
  };
}

export const saveAndContinue = () => {
  const step = useNewCampaignStore.getState().step;
  const index = brandFormSteps.indexOf(step);

  if (index < brandFormSteps.length - 1) {
    NewCampaignChangeHandler.onStepChange(brandFormSteps[index + 1]);
  } else {
    NewCampaignChangeHandler.onStepChange(brandFormSteps[0]);
  }
};

export const onBackClick = () => {
  const step = useNewCampaignStore.getState().step;
  const index = brandFormSteps.indexOf(step);

  if (index >= 1) {
    NewCampaignChangeHandler.onStepChange(brandFormSteps[index - 1]);
  }
};
