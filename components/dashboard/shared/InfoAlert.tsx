import { TandaFlex, TandaHeading } from 'components';
import { AlertStatus } from 'models';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { alertStatusHandler } from 'utils';
import { Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  text: ReactNode;
  type: AlertStatus;
}

export const InfoAlert = ({ text, type }: Props) => {
  const { bg, color, icon } = alertStatusHandler(type);

  return (
    <TandaFlex
      w={DEFAULT_STYLES.fullWidth}
      minH='47px'
      borderRadius='6px'
      padding={{ base: '12px', md: '12px 21px' }}
      gap='3'
      bg={bg}
    >
      <Icon fontSize='1.3rem' as={icon} color={color} />

      <TandaHeading color={color} {...textStyles.bolderBody}>
        {text}
      </TandaHeading>
    </TandaFlex>
  );
};
