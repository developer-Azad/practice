import { OptionCard } from 'components';
import { Objective } from 'models';
import { NewCampaignChangeHandler, useNewCampaignStore } from 'store';

interface Props {
  obj: Objective;
  desc?: string;
}

export const ObjCard = ({ obj, desc }: Props) => {
  const { objective } = useNewCampaignStore();
  const { onObjChange } = NewCampaignChangeHandler;
  const isActive = obj === objective;

  return (
    <OptionCard
      isActive={isActive}
      title={obj}
      tip={desc}
      onClick={() => {
        onObjChange(obj);
      }}
    />
  );
};
