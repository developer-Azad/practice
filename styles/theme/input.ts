import { inputAnatomy } from '@chakra-ui/anatomy';
import {
  ComponentMultiStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';
import { pxToRem, rgba } from 'utils/stylesformatter';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: '5px',
    color: DEFAULT_STYLES.deepGreen,
    fontSize: '1rem',
    width: DEFAULT_STYLES.fullWidth,
    fontWeight: 400,
    _placeholder: {
      fontSize: pxToRem(14),
      fontWeight: 400,
    },
  },
  addon: {
    color: DEFAULT_STYLES.primaryDark,
  },
  element: {
    color: rgba(DEFAULT_STYLES.primaryDark, 0.8),
    fontSize: pxToRem(12),
    fontWeight: 500,
  },
});

const dark = definePartsStyle({
  field: {
    border: DEFAULT_STYLES.dimBorder,
    color: DEFAULT_STYLES.borderColor,
    background: DEFAULT_STYLES.deepBlack,
    _placeholder: {
      color: 'rgba(228, 226, 226, 0.4)',
    },
    _focus: {
      border: '1px solid',
      borderColor: 'rgba(228, 226, 226, 1)',
    },
  },
});

const darkTransparent = definePartsStyle({
  field: {
    border: DEFAULT_STYLES.dimBorder,
    color: DEFAULT_STYLES.borderColor,
    background: 'transparent',
    _placeholder: {
      color: 'white',
    },
    _focus: {
      border: '1px solid',
      borderColor: 'rgba(228, 226, 226, 1)',
    },
  },
});

const transparent = definePartsStyle({
  field: {
    border: 0,
    color: DEFAULT_STYLES.borderColor,
    background: 'transparent',
    _placeholder: {
      color: DEFAULT_STYLES.borderColor,
      opacity: 1,
    },
    _focus: {
      border: '0',
    },
  },
});

const primary = definePartsStyle({
  field: {
    background: 'white',
    _placeholder: {
      color: DEFAULT_STYLES.primaryDark,
    },
  },
});

const gray = definePartsStyle({
  field: {
    width: '100%',
    border: '1px solid',
    borderColor: DEFAULT_STYLES.darkGray,
    color: DEFAULT_STYLES.borderColor,
    background: '#3C434D',
    _placeholder: {
      color: DEFAULT_STYLES.borderColor,
    },
    _focus: {
      border: '1px solid',
      borderColor: 'rgba(228, 226, 226, 1)',
    },
  },
  element: {
    color: DEFAULT_STYLES.darkGray,
  },
});

// How to define sizes
const tandaXl = defineStyle({
  px: '4',
  h: '42px',
});

const tandaXXl = defineStyle({
  px: '4',
  h: '53px',
});

const sizes = {
  xl: definePartsStyle({ field: tandaXl }),
  xxl: definePartsStyle({ field: tandaXXl }),
};

export const inputTheme: ComponentMultiStyleConfig = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: { dark, primary, gray, transparent, darkTransparent },
  defaultProps: {
    size: 'xl',
    variant: 'primary',
  },
});
