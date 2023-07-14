import { isLocal } from './constants';

export const logger = (message: any) => {
  if (isLocal) {
    console.log(message);
  }
};
