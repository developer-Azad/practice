import { flowColorHandler } from 'utils';
import { Flex } from '@chakra-ui/react';
import { StatusCard } from 'components';

export const FlowCard = () => {
  return (
    <Flex flex='1' align='center' justify='center' gap='10'>
      <StatusCard color={flowColorHandler('Inflow')} text='Inflow' desc='N 0' />

      <StatusCard
        color={flowColorHandler('Outflow')}
        text='OutFlow'
        desc='N 0'
      />
    </Flex>
  );
};
