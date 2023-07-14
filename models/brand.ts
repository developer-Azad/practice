import { SocialMedia } from './shared';

export interface BrandModel {
  logo: string;
  name: string;
  url: string;
  bio: string;
}

export enum CampaignCategory {
  All = 'All',
  Active = 'Active',
  Drafts = 'Drafts',
  Closed = 'Closed',
}

export enum CampaignFormStep {
  One = 'Information',
  Two = 'Profile',
  Three = 'Requirements',
  Four = 'Preview',
}

export enum Objective {
  Conversations = 'Conversations',
  Awareness = 'Awareness',
  Contents = 'Contents',
}

export enum CampaignType {
  ChallengesPlus = 'Challenges + Creator Licensing',
  OrganicPlus = 'Organic Posts + Creator Licensing',
  UGCPlus = 'UGC + Creator Licensing',
  Organic = 'Organic Posts',
  Challenges = 'Challenges',
}

export type BrandLocation = 'Africa' | 'NGR' | string;
export type Gender = 'any' | 'male' | 'female';

export interface NewCampaignModel {
  brand?: BrandModel;
  id: string;
  name?: string;
  objective?: Objective;
  type?: CampaignType;
  platform?: SocialMedia;
  budget?: string | number;
  range?: {
    from?: number;
    to?: number;
  };
  image?: string;
  step: CampaignFormStep;
  location?: BrandLocation;
  niche?: string[];
  gender?: Gender;
  age?: {
    min?: number;
    max?: number;
  };
  followers?: {
    min?: number;
    max?: number;
  };
}


