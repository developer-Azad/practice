import { Span } from 'components';
import { CampaignFormStep } from 'models';
import { ReactNode } from 'react';

export const brandsFormInfoText = (step: CampaignFormStep) => {
  let header: ReactNode;

  switch (step) {
    case CampaignFormStep.One:
      header = (
        <Span>
          Provide creators details about <br /> your brand and campaign
        </Span>
      );
      break;

    case CampaignFormStep.Two:
      header = (
        <Span>
          Select the creator segments <br />
          you will like to work with
        </Span>
      );
      break;

    case CampaignFormStep.Three:
      header = (
        <Span>
          Add all your content requirements <br /> such as media type and
          content type
        </Span>
      );
      break;

    case CampaignFormStep.Four:
      header = (
        <Span>
          Finished! Double check all details <br /> provided before submitting
          for review
        </Span>
      );
      break;
  }

  return header;
};
