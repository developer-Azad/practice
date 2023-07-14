import { Select, SelectProps } from '@chakra-ui/react';
import { RiArrowDownSFill } from '@react-icons/all-files/ri/RiArrowDownSFill';

export const TandaSelect = ({ ...r }: SelectProps) => {
  return (
    <Select
      icon={<RiArrowDownSFill fontSize='30px' />}
      bg={r.color ?? 'white'}
      {...r}
    />
  );
};
