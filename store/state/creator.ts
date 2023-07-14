import { NewCreatorModel, Reset, CreatorFormStep } from 'models';
import { nanoid } from 'nanoid';
import { create } from 'zustand';

const initialState: NewCreatorModel = {
  firstName: '',
  lastName: '',
  dob: undefined,
  nationality: undefined,
  bvn: undefined,
  status: undefined,
  desc: undefined,
  street: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  phone: undefined,
  step: CreatorFormStep.One,
  identity: undefined,
  identityNo: undefined,
  doc: undefined,
  social: undefined,
  brands: [],
  authenticated: false,
  id: nanoid(8),
  showIdentity: false,
};

interface NewCreator extends NewCreatorModel, Reset {}

export const useNewCreatorStore = create<NewCreator>((set) => ({
  ...initialState,
  reset: () => set(() => ({ ...initialState })),
}));
