import { CampaignFormStep, NewCampaignModel, Reset } from 'models';
import { nanoid } from 'nanoid';
import { create } from 'zustand';

const initialState: NewCampaignModel = {
  id: nanoid(8),
  step: CampaignFormStep.One,
  type: undefined,
  objective: undefined,
  image: undefined,
  brand: undefined,
  platform: undefined,
  budget: undefined,
  range: undefined,
  name: undefined,
  age: undefined,
  followers: undefined,
  gender: 'any',
  location: 'Africa',
  niche: undefined,
};

interface NewCampaign extends NewCampaignModel, Reset {}

export const useNewCampaignStore = create<NewCampaign>((set) => ({
  ...initialState,
  reset: () => set(() => ({ ...initialState })),
}));
