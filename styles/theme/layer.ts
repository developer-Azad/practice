import { DEFAULT_STYLES } from '../globalStyles';

export const layerStyles = {
  flex: {
    alignItems: 'center',
  },
  spaced: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    border: DEFAULT_STYLES.border,
    rounded: '10',
    padding: {
      base: '20px 10px',
      '2xl': '20px',
    },
    minH: 'max-content',
  },
  container: {
    width: {
      base: '100%',
      xl: '934px',
      xxl: '1120px',
      '2xl': '1200px',
    },
  },
  gradientText: {
    background: DEFAULT_STYLES.yellowGradient,
    backgroundClip: 'text',
  },
  sharedGrid: {
    gridTemplateColumns: {
      base: 'repeat(1,1fr)',
      sm: 'repeat(2,1fr)',
      lg: 'repeat(3,1fr)',
    },
    w: DEFAULT_STYLES.fullWidth,
    columnGap: { base: '20px', lg: '40px', '2xl': '90px' },
    rowGap: '5',
  },
  modal: {
    gap: '24px',
    boxShadow: DEFAULT_STYLES.boxShadow,
    color: DEFAULT_STYLES.borderColor,
    bg: DEFAULT_STYLES.deepGreen,
    padding: '25px 0px',
  },
};
