'use client';
import { ExistingPage, NewPage } from 'components';
import { useDefaultContext } from 'context';

export const OverviewClient = () => {
  const { isNew } = useDefaultContext();

  return <>{!isNew ? <ExistingPage /> : <NewPage />}</>;
};
