'use client';
import { NewCampaignForm } from 'components';
import { useDefaultContext } from 'context';
import { useIsomorphicLayoutEffect } from 'hooks';

export const NewCampaignClient = () => {
  const { updateDefaultProps } = useDefaultContext();

  useIsomorphicLayoutEffect(() => {
    updateDefaultProps(false, 'avatar');

    return () => {
      updateDefaultProps(true, 'avatar');
    };
  }, []);

  return <NewCampaignForm />;
};
