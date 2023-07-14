import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../globalStyles';
import { textStyles } from './text';

const dark = defineStyle({
  color: DEFAULT_STYLES.borderColor,
  background: DEFAULT_STYLES.deepBlack,
  fontSize: DEFAULT_STYLES.desc,
  border: DEFAULT_STYLES.dimBorder,
  _placeholder: {
    color: 'rgba(228, 226, 226, 0.4)',
    fontSize: textStyles.desc.fontSize,
  },
  _focus: {
    border: '1px solid',
    borderColor: 'rgba(228, 226, 226, 1)',
  },
});

export const textareaTheme = defineStyleConfig({
  variants: { dark },
});
