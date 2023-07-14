import { SocialMedia } from './shared';

export interface ChannelModel {
  channel: SocialMedia;
  subscriptions: number;
  id: string;
}
