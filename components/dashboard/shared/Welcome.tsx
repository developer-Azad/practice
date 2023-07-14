import { VStack, Button, Text } from '@chakra-ui/react';
import { ColumnFlex, TandaHeading } from 'components';
import { IProps } from 'models';
import { DEFAULT_STYLES, outfit, poppins, textStyles } from 'styles';

interface Props extends IProps {
  btnText?: string;
  onClick?: () => void;
}

export const Welcome = ({ desc, btnText, onClick }: Props) => {
  return (
    <ColumnFlex
      layerStyle='container'
      minH='500px'
      justify='space-between'
      className={poppins.className}
    >
      <VStack>
        <TandaHeading {...textStyles.header}>Welcome to Buxx!</TandaHeading>

        <Text
          textStyle='title'
          textAlign='center'
          maxW='700px'
          fontWeight={DEFAULT_STYLES.normalFontWeight}
        >
          {desc}
        </Text>
      </VStack>

      <Button
        alignSelf='center'
        size='lgPadding'
        onClick={onClick}
        className={outfit.className}
      >
        {btnText}
      </Button>
    </ColumnFlex>
  );
};
