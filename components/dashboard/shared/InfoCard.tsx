import { ColumnFlex, Desc, TandaFlex, TandaHeading } from 'components';
import { IProps } from 'models';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { Circle, Icon, Text } from '@chakra-ui/react';
import { BsInfo } from '@react-icons/all-files/bs/BsInfo';

interface Props extends IProps {
  header: string;
}

export const InfoCard = ({ desc, title, header }: Props) => {
  return (
    <TandaFlex
      minH='100px'
      bg='rgba(99, 115, 129, 0.7);'
      rounded='6'
      w='full'
      p='20px 30px'
      gap='6'
    >
      <Circle
        bg={DEFAULT_STYLES.yellowGradient}
        minW='44px'
        minH='44px'
        rounded='22px'
      >
        <Icon as={BsInfo} color={DEFAULT_STYLES.deepGreen} fontSize='2rem' />
      </Circle>

      <ColumnFlex gap='2' maxW='735px'>
        <TandaHeading {...textStyles.smallSubtitle}>{header}</TandaHeading>
        {title && <Text textStyle='body'>{title}</Text>}
        {desc && <Desc>{desc}</Desc>}
      </ColumnFlex>
    </TandaFlex>
  );
};
