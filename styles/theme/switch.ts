import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    boxShadow: 'inset 1px 2px 4px rgba(0, 0, 0, 0.32);',
  },
  thumb: {
    bg: 'white',
  },
  track: {
    bg: '#A3A7B7',
    _checked: {
      bg: DEFAULT_STYLES.yellowGradient,
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
