import { Span } from 'components';
import { CreatorFormStep } from 'models';
import { ReactNode } from 'react';

export const creatorsFormInfoText = (step: CreatorFormStep) => {
  let desc: string;
  let title: string | undefined = undefined;
  let header: ReactNode;

  switch (step) {
    case CreatorFormStep.One:
      desc =
        '“According to CBN regulation, we need to verify your identity before providing you our exclusive automated financial services.';
      header = (
        <Span>
          Let{'’'}s get to know each other <br /> tell us more about you.
        </Span>
      );
      break;
    case CreatorFormStep.Two:
      desc =
        'The data you share with us is stored anonymously and encrypted using the latest security standards.We cannot amend it, we can only view it';
      header = 'Connect your social media platforms';
      title =
        'You need to connect your social media handles so Buxx can accurately analyze your number of subscribers, followers and engagement rates.';
      break;
    case CreatorFormStep.Three:
      desc =
        'Buxx ensure you get only curated list of brands you love to work with so you can start getting more brand deal.';
      header = (
        <Span>
          Help us understand your preferred <br /> kind of brands to work with
        </Span>
      );
      break;
    case CreatorFormStep.Four:
      desc =
        'Data protection & security are of utmost importance to us here at Buxx. Multi-factor authentication protects your account from unauthorized access';
      header = 'You’re almost done! Secure your accounts';
      break;
  }

  return { desc, title, header };
};
