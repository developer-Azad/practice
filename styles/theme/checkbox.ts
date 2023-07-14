import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const dark = definePartsStyle({
  control: {
    borderColor: DEFAULT_STYLES.darkColor,
    _checked: {
      bg: DEFAULT_STYLES.darkColor,
      color: DEFAULT_STYLES.white,
      borderColor: DEFAULT_STYLES.darkColor,
      _hover: {
        bg: DEFAULT_STYLES.darkColor,
        color: DEFAULT_STYLES.white,
        borderColor: DEFAULT_STYLES.darkColor,
      },
    },
  },
  label: {
    fontSize: DEFAULT_STYLES.textFontSize,
  },
});

const baseStyle = definePartsStyle({
  control: {
    borderColor: DEFAULT_STYLES.borderColor,
    bg: 'white',
    _checked: {
      bg: DEFAULT_STYLES.yellowGradient,
      color: DEFAULT_STYLES.deepGreen,
      border: 'none',
      _hover: {
        bg: DEFAULT_STYLES.yellowGradient,
        color: DEFAULT_STYLES.deepGreen,
        border: 'none',
      },
    },
  },
  label: {
    fontSize: DEFAULT_STYLES.textFontSize,
  },
});

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    dark,
  },
});
