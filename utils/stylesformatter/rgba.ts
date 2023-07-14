import { hexToRgb } from './hexToRgb';

export const rgba = (color: string, opacity: string | number) => {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
};
