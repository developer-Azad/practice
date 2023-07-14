import { CreatorFormStep } from 'models';
import { useNewCreatorStore } from '../state';
import { userFormSteps } from '../data';

export class NewUserChangeHandler {
  static onStepChange = (step: CreatorFormStep) => {
    useNewCreatorStore.setState(() => ({
      step,
    }));
  };

  static onShowIdentityChange = (showIdentity: boolean) => {
    useNewCreatorStore.setState(() => ({
      showIdentity,
    }));
  };

  static onAuthenticatedChange = (auth: boolean) => {
    useNewCreatorStore.setState(() => ({
      authenticated: auth,
    }));
  };

  static onBrandsChange = (brand: string) => {
    useNewCreatorStore.setState((s) => ({
      brands: s.brands.includes(brand)
        ? s.brands.filter((e) => e !== brand)
        : [...s.brands, brand],
    }));
  };
}

export const nextAndSubmit = (onDone?: () => void) => {
  const step = useNewCreatorStore.getState().step;
  const showIdentity = useNewCreatorStore.getState().showIdentity;
  const index = userFormSteps.indexOf(step);

  if (index === 0 && !showIdentity) {
    NewUserChangeHandler.onShowIdentityChange(true);
    return;
  }

  if (showIdentity) {
    if (index < userFormSteps.length - 1) {
      NewUserChangeHandler.onStepChange(userFormSteps[index + 1]);
    } else {
      onDone?.();
      NewUserChangeHandler.onShowIdentityChange(false);
      NewUserChangeHandler.onStepChange(userFormSteps[0]);
    }
  }

  if (index === userFormSteps.length - 1) {
    NewUserChangeHandler.onAuthenticatedChange(false);
  }
};
