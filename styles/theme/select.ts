import { selectAnatomy } from '@chakra-ui/anatomy';
import {
  ComponentMultiStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';
import { pxToRem } from 'utils/stylesformatter';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: '5px',
    color: DEFAULT_STYLES.deepGreen,
    h: '42px',
    _placeholder: {
      fontSize: pxToRem(14),
    },
  },
  icon: {
    color: 'rgba(43, 43, 43, 0.5)',
  },
});

const tandaXl = defineStyle({
  fontSize: '1rem',
  px: '4',
});

const sizes = {
  xl: definePartsStyle({ field: tandaXl, addon: tandaXl }),
};

export const selectTheme: ComponentMultiStyleConfig = defineMultiStyleConfig({
  sizes,
  baseStyle,
  defaultProps: {
    size: 'xl',
  },
});
