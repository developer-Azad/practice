import { IconType } from '@react-icons/all-files';
import { IProps, ImageModel, ProductDescription } from './shared';
import { StaticImageData } from 'next/image';

export interface FlowModel extends ImageModel {
  id: string;
  type: FlowType;
  num: number;
  data: FlowData[];
}

export interface FlowData extends ImageModel, Pick<IProps, 'desc'> {
  id: string;
  price: string;
  vidNum: number;
  picNumber: number;
  task: string;
  days?: string;
  info: {
    icon: StaticImageData;
    location?: string;
  };
  timeline?: TimelineModel;
}

export interface TimelineModel {
  link: {
    title?: string;
    link?: string;
  };
  desc: ProductDescription[];
}

export type FlowType =
  | 'Applied'
  | 'Collaborating'
  | 'Review'
  | 'Posting'
  | 'Completed'
  | 'Cancelled';

export type FlowModalPart = 'timeline' | 'chat';

export interface FlowBtnModel {
  id: string;
  icon: IconType;
  name: FlowModalPart;
}
