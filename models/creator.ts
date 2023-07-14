import { StaticImageData } from 'next/image';
import { IProps, SocialMedia } from './shared';

export interface NewCreatorModel {
  firstName: string;
  lastName: string;
  dob?: Date;
  nationality?: string;
  bvn?: number;
  status?: string;
  desc?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: number;
  phone?: number;
  step: CreatorFormStep;
  showIdentity?: boolean;
  // Change to enum or type later
  identity?: string;
  identityNo?: string;
  doc?: any;
  social?: any[];
  brands: string[];
  authenticated?: boolean;
  id: string;
}

export enum CreatorFormStep {
  One = 'Information',
  Two = 'Accounts',
  Three = 'Preference',
  Four = 'Security',
}

export interface AddSocialModel {
  id: string;
  channel: SocialMedia;
}

export interface AuthDetailsModel extends IProps {
  icon: StaticImageData;
  id: string;
}
