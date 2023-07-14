import { SocialMedia, ChannelModel } from 'models';
import { statusColorHandler } from 'utils';
import { nanoid } from 'nanoid';

export const invoicesData = [
  {
    color: statusColorHandler('Paid'),
    text: 'Paid',
    desc: 'N 0',
  },
  {
    color: statusColorHandler('Pending'),
    text: 'Pending',
    desc: 'N 0',
  },
];

export const referralData = [
  {
    color: statusColorHandler('InProgress'),
    text: 'In Progress',
    desc: '10',
  },
  {
    color: statusColorHandler('Completed'),
    text: 'Completed',
    desc: '4',
  },
];

export const channelData: ChannelModel[] = [
  { id: nanoid(12), channel: SocialMedia.Instagram, subscriptions: 0 },
  { id: nanoid(12), channel: SocialMedia.YouTube, subscriptions: 0 },
  { id: nanoid(12), channel: SocialMedia.TikTok, subscriptions: 0 },
];
