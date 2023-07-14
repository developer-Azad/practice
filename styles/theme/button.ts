import {
  ComponentSingleStyleConfig,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';

// Sizes
const lgPadding = defineStyle({
  px: '24px',
  py: '14px',
});

const smPadding = defineStyle({
  px: '14px',
  py: '10px',
});

// Variants
const bg = defineStyle({
  color: DEFAULT_STYLES.deepGreen,
  bg: DEFAULT_STYLES.yellowGradient,
  _disabled: {
    color: DEFAULT_STYLES.deepGreen,
    bg: DEFAULT_STYLES.yellowGradient,
    opacity: 0.2,
  },
  _hover: {
    _disabled: {
      color: DEFAULT_STYLES.deepGreen,
      bg: DEFAULT_STYLES.yellowGradient,
      opacity: 0.2,
    },
  },
});

const whiteBg = defineStyle({
  color: DEFAULT_STYLES.primaryDark,
  bg: DEFAULT_STYLES.white,
  _disabled: {
    color: DEFAULT_STYLES.primaryDark,
    bg: DEFAULT_STYLES.white,
    opacity: 0.2,
  },
  _hover: {
    _disabled: {
      color: DEFAULT_STYLES.primaryDark,
      bg: DEFAULT_STYLES.white,
      opacity: 0.2,
    },
  },
});

const grayBg = defineStyle({
  color: DEFAULT_STYLES.white,
  bg: DEFAULT_STYLES.lightGrayBg,
  _disabled: {
    color: DEFAULT_STYLES.white,
    bg: DEFAULT_STYLES.lightGrayBg,
    opacity: 0.2,
  },
  _hover: {
    _disabled: {
      color: DEFAULT_STYLES.white,
      bg: DEFAULT_STYLES.lightGrayBg,
      opacity: 0.2,
    },
  },
});

const text = defineStyle((_) => ({
  background: DEFAULT_STYLES.yellowGradient,
  backgroundClip: 'text',
  p: 0,
  width: 'max-content',
  fontSize: DEFAULT_STYLES.desc,
}));

const transparent = defineStyle((_) => ({
  background: 'transparent',
  color: DEFAULT_STYLES.borderColor,
}));

const noBg = defineStyle({
  border: '1px solid',
  borderColor: DEFAULT_STYLES.borderColor,
  backgroundColor: 'transparent',
});

export const buttonTheme: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    borderRadius: 8,
    transition: DEFAULT_STYLES.transition,
    fontWeight: DEFAULT_STYLES.semibold,
    fontSize: { base: DEFAULT_STYLES.desc, md: '0.8rem' },
    _hover: {
      opacity: 0.8,
      _disabled: {
        opacity: 0.9,
        bg: 'gray.300',
      },
    },
  },

  sizes: { lgPadding, smPadding },

  variants: {
    noBg,
    bg,
    text,
    transparent,
    grayBg,
    whiteBg,
  },
  defaultProps: {
    size: 'smPadding',
    variant: 'bg',
  },
});
