import { ReactNode } from 'react';
import {
  FormControl,
  FormControlProps,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { TandaFlex } from './TandaFlex';
import { Desc } from './Desc';

interface Props {
  // Pass either label or placeholder for either one to show
  label?: string;
  errorMessage?: string;
  helperText?: string;
  value?: string | number;
  register?: UseFormRegisterReturn;
  // Use this when not using register
  onChange?: (e: any) => void;
  // For passing additional styles to elements
  inputProps?: InputProps;
  formProps?: FormControlProps;
  rightElement?: ReactNode;
  leftElement?: ReactNode;
  // This is when I just wanted to use the form label and error of this inputcomp with select for example
  children?: ReactNode;
}

export const TandaInput = ({
  label,
  errorMessage,
  register,
  onChange,
  value,
  formProps,
  inputProps,
  rightElement,
  children,
  leftElement,
  helperText,
}: Props) => {
  return (
    <FormControl
      display='flex'
      justifyContent='center'
      alignItems='start'
      flexDirection='column'
      {...formProps}
    >
      {label && (
        <FormLabel
          width={DEFAULT_STYLES.fullWidth}
          pt='1'
          {...textStyles.label}
          fontWeight={DEFAULT_STYLES.normalFontWeight}
        >
          {label}
        </FormLabel>
      )}

      {!children && (
        <InputGroup>
          {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}

          {register && <Input value={value} {...register} {...inputProps} />}

          {/* When register is not used */}

          {onChange && (
            <Input
              value={value}
              {...inputProps}
              onChange={(e) => onChange(e.target.value)}
            />
          )}

          {rightElement && (
            <InputRightElement>{rightElement}</InputRightElement>
          )}
        </InputGroup>
      )}

      {children}

      <TandaFlex gap='5' w='full' mt='1'>
        {helperText && (
          <Desc color={DEFAULT_STYLES.borderColor}>{helperText}</Desc>
        )}

        {errorMessage && (
          <Desc color='red' flex='1' textAlign='center'>
            {errorMessage}
          </Desc>
        )}
      </TandaFlex>
    </FormControl>
  );
};
