import { pxToRem } from 'utils/stylesformatter';
import { DEFAULT_STYLES } from '../globalStyles';

export const textStyles = {
  header: {
    fontSize: { base: '1.3rem', sm: pxToRem(32), md: pxToRem(40) },
    lineHeight: 1.5,
    fontWeight: 600,
  },
  header2: {
    fontSize: { base: '1.5rem', md: pxToRem(32) },
    lineHeight: 1.5,
    fontWeight: 700,
  },
  subHeader: {
    fontSize: { base: pxToRem(19), md: pxToRem(22) },
    lineHeight: 1.3,
    fontWeight: 600,
  },
  title: {
    fontSize: { base: '1rem', md: pxToRem(19) },
    lineHeight: 1.3,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: '1rem',
    lineHeight: 1.3,
    fontWeight: 600,
  },
  smallSubtitle: {
    fontSize: '0.75rem',
    lineHeight: 1.3,
    fontWeight: 600,
  },
  body: {
    fontSize: '0.78rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  bolderBody: {
    fontSize: '0.78rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  desc: {
    fontSize: pxToRem(12),
    lineHeight: 1.5,
    fontWeight: 400,
  },
  boldDesc: {
    fontSize: pxToRem(12),
    lineHeight: 1.5,
    fontWeight: 600,
  },
  tiny: {
    fontSize: '0.625rem',
    lineHeight: 1.5,
    color: DEFAULT_STYLES.lightGray,
  },
  xs: {
    fontSize: pxToRem(9),
    fontWeight: 400,
    lineHeight: 1.5,
  },
};
