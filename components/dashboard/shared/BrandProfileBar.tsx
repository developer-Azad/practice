import { Badge, Box, Icon } from '@chakra-ui/react';
import { GradientBorderBtn, TandaFlex, TandaMenuList } from 'components';
import { useState } from 'react';
import { BsWallet2 } from 'react-icons/bs';
import { IoMdNotifications } from '@react-icons/all-files/io/IoMdNotifications';
import { BiUserCircle } from '@react-icons/all-files/bi/BiUserCircle';
import { brandsOpts } from 'store';
import { DEFAULT_STYLES } from 'styles';
import { pxToRem } from 'utils';

export const BrandProfile = () => {
  const [selected, setSelected] = useState(brandsOpts[0].value);

  return (
    <TandaFlex gap='3'>
      <Box pos='relative' cursor='pointer' mt='1' mr='4'>
        <Icon as={IoMdNotifications} fontSize={pxToRem(22)} />
        <Badge
          pos='absolute'
          fontSize={pxToRem(6)}
          left='3'
          top='1'
          zIndex={1}
          bg={DEFAULT_STYLES.error}
          color='white'
        >
          90
        </Badge>
      </Box>

      <Box display={{ base: 'none', sm: 'inline-block' }} w='150px'>
        <TandaMenuList
          btnText={selected}
          list={brandsOpts}
          isCheckType
          selected={selected}
          groupTitle='Brands'
          listProps={{
            bg: DEFAULT_STYLES.white,
            color: DEFAULT_STYLES.deepGreen,
            minW: '150px !important',
          }}
          onChange={(_, val) => {
            setSelected(val);
          }}
        />
      </Box>

      <GradientBorderBtn leftIcon={<BsWallet2 />}>$15,000</GradientBorderBtn>

      <Icon as={BiUserCircle} fontSize={pxToRem(34)} cursor='pointer' />
    </TandaFlex>
  );
};
