import { CampaignCategory, MenuOption } from 'models';

export const brandMenuOpts: MenuOption[] = [
  {
    id: '1',
    name: 'All',
    value: CampaignCategory.All,
  },
  {
    id: '2',
    name: 'Active Campaigns',
    value: CampaignCategory.Active,
  },
  {
    id: '3',
    name: 'Drafts',
    value: CampaignCategory.Drafts,
  },
  {
    id: '4',
    name: 'Closed',
    value: CampaignCategory.Closed,
  },
];

export const brandsOpts: MenuOption[] = [
  {
    id: '2',
    name: 'All brands',
    value: 'All brands',
  },
  {
    id: '3',
    name: 'Tanda',
    value: 'Tanda',
  },
];
