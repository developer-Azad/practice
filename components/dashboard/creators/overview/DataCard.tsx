import { ColumnFlex, StatusCard, TandaFlex, TandaHeading } from 'components';
import { StatusCardProps } from 'models';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { Center, HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  showBtn?: boolean;
  data?: StatusCardProps[];
  progress?: ReactNode;
  onClick?: () => void;
}

export const DataCard = ({
  title,
  showBtn,
  data,
  progress,
  onClick,
}: Props) => {
  const renderStatus = data?.map(({ text, color, desc }, i) => (
    <StatusCard color={color} text={text} desc={desc} key={`${text}_${i}`} />
  ));

  return (
    <ColumnFlex layerStyle='card' minH='170px' gap='7'>
      <TandaFlex layerStyle='spaced'>
        <TandaHeading color={DEFAULT_STYLES.borderColor} {...textStyles.label}>
          {title}
        </TandaHeading>

        {showBtn && (
          <Center
            border={DEFAULT_STYLES.dimBorder}
            color={DEFAULT_STYLES.borderColor}
            p='1px 4px'
            fontSize='0.56rem'
            rounded='6'
            cursor='pointer'
            onClick={onClick}
          >
            See all
          </Center>
        )}
      </TandaFlex>

      <TandaFlex gap='5'>
        {progress}

        <HStack gap={{ base: '5', xl: '1', '2xl': '5' }}>{renderStatus}</HStack>
      </TandaFlex>
    </ColumnFlex>
  );
};
