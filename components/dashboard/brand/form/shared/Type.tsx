import { OptionCard } from 'components';
import { CampaignType } from 'models';
import { NewCampaignChangeHandler, useNewCampaignStore } from 'store';

interface Props {
  value: string;
  desc: string;
}

export const Type = ({ value, desc }: Props) => {
  const { type } = useNewCampaignStore();
  const { onTypeChange } = NewCampaignChangeHandler;
  const isActive = type === value;

  return (
    <>
      <OptionCard
        isActive={isActive}
        title={value}
        desc={desc}
        onClick={() => {
          onTypeChange(value as CampaignType);
        }}
        justifyContent='flex-start'
      />
    </>
  );
};
