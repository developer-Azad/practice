import { FlexProps, BoxProps, ResponsiveValue } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { textStyles } from 'styles';

export type ImageModel = { icon: StaticImageData };
export type AlertStatus = 'error' | 'success' | 'warning' | 'info';
export interface LayoutProps {
  children?: ReactNode;
}

export interface IProps {
  title?: string;
  desc?: ReactNode;
}

export interface Reset {
  reset: () => void;
}

export interface StatusCardProps {
  color?: string;
  text?: string;
  desc?: string;
}

export interface ProductDescription {
  title?: string;
  details: string | string[];
}

export enum PortalId {
  id = 'portal_div',
}

export interface ColumnFlexProps extends FlexProps, BoxProps {}

export type ButtonVariants = ResponsiveValue<
  | 'link'
  | 'text'
  | 'bg'
  | 'outline'
  | 'transparent'
  | 'solid'
  | 'ghost'
  | 'unstyled'
  | 'lightBg'
  | 'noBgWithRadius'
  | 'bgWithRadius'
  | 'grayBg'
  | 'whiteBg'
>;

export enum UserType {
  Brand = 'brand',
  Creator = 'creator',
}

export enum SocialMedia {
  Facebook = 'facebook',
  TikTok = 'tikTok',
  Instagram = 'instagram',
  Twitter = 'twitter',
  YouTube = 'youtube',
}

export type TextStyle = keyof typeof textStyles;