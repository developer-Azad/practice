import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './button';
import { checkboxTheme } from './checkbox';
import { inputTheme } from './input';
import { radioTheme } from './radio';
import { selectTheme } from './select';
import { spinnerTheme } from './spinner';
import { textareaTheme } from './textarea';
import { switchTheme } from './switch';
import { textStyles } from './text';
import { layerStyles } from './layer';
import { breakpoints } from './breakpoints';
import { borderRadius } from './radius';

export * from './layer';
export * from './text';

export const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Spinner: spinnerTheme,
    Select: selectTheme,
    Radio: radioTheme,
    Checkbox: checkboxTheme,
    Textarea: textareaTheme,
    Switch: switchTheme,
  },
  textStyles,
  layerStyles,
  breakpoints,
  ...borderRadius,
});
