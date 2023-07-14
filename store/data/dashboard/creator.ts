import gAuth from 'assets/images/googleauth.png';
import gCam from 'assets/images/gcam.png';
import gDev from 'assets/images/device.png';
import {
  CreatorFormStep,
  AddSocialModel,
  SocialMedia,
  AuthDetailsModel,
} from 'models';
import { nanoid } from 'nanoid';

// Form section
export const userFormSteps = [
  CreatorFormStep.One,
  CreatorFormStep.Two,
  CreatorFormStep.Three,
  CreatorFormStep.Four,
];

export const socialAccounts: AddSocialModel[] = [
  {
    id: nanoid(12),
    channel: SocialMedia.Instagram,
  },
  {
    id: nanoid(12),
    channel: SocialMedia.TikTok,
  },
  {
    id: nanoid(12),
    channel: SocialMedia.YouTube,
  },
];

export const brandOptions = [
  'Art',
  'Automotive',
  'Beauty',
  'Business',
  'Food',
  'Art1',
  'Automotive1',
  'Beauty1',
  'Business1',
  'Food1',
  'Art2',
  'Automotive2',
  'Beauty2',
  'Business2',
  'Food2',
  'Food4',
  'Food5',
  'Food6',
];

export const authDetails: AuthDetailsModel[] = [
  {
    icon: gAuth,
    id: nanoid(5),
    title: 'Download and install Google',
    desc: `Download and install Google Authenticator in your mobile device.`,
  },
  {
    icon: gCam,
    id: nanoid(5),
    title: 'Setup using your camera',
    desc: 'Use the camera to scan QR code',
  },
  {
    icon: gDev,
    id: nanoid(5),
    title: 'Verify your device',
    desc: 'Enter the code from the app',
  },
];
