import { ColumnFlex, Desc, TandaFlex } from 'components';
import { StatusCardProps } from 'models';
import { Circle } from '@chakra-ui/react';

export const StatusCard = ({ color, text, desc }: StatusCardProps) => {
  return (
    <ColumnFlex>
      <TandaFlex gap='1'>
        <Circle bg={color} p='1' />
        <Desc userSelect='none'>{text}</Desc>
      </TandaFlex>

      <Desc>{desc}</Desc>
    </ColumnFlex>
  );
};
