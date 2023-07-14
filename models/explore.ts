import { StaticImageData } from 'next/image';
import { IconType } from '@react-icons/all-files';
import { IProps, ProductDescription } from './shared';

export enum ExploreType {
  Deals = 'Deals',
  Specials = 'Specials',
}

export interface Data {
  icon: IconType;
  title: string;
}
export interface Content extends IProps {
  details: IProps[];
  requirements: Data[];
  id: string;
}

export interface ExploreData {
  title: string;
  list: ExploreList[];
  icon: StaticImageData;
  id: string;
  type: ExploreType;
  desc?: ProductDescription[];
  contents?: Content[];
  important: Data[];
}

export interface ExploreList {
  icon: IconType;
  title: string;
  id: string;
}
