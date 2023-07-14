import Image from 'next/image';
import glass from 'assets/images/glass.png';
import {
  ColumnFlex,
  Desc,
  GradientBorderBtn,
  IconBtn,
  TandaFlex,
  TandaHDivider,
} from 'components';
import { DEFAULT_STYLES } from 'styles';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { FiSettings } from '@react-icons/all-files/fi/FiSettings';
import { FiLogOut } from 'react-icons/fi';
import { IoIosHelpCircle } from '@react-icons/all-files/io/IoIosHelpCircle';
import { DashRoutes } from 'utils';
import { CloseIcon } from '@chakra-ui/icons';
import { useDefaultContext } from 'context';
import { Box, Flex, HStack } from '@chakra-ui/react';
import { navItems } from 'store';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export const SideBar = () => {
  const { mediaQuery, updateDefaultProps, isBrand } = useDefaultContext();
  const { push, refresh } = useRouter();

  const renderList = navItems(isBrand!).map((e) => {
    return <NavItem {...e} key={e.id} />;
  });

  return (
    <Flex
      w={{ base: 'full', xl: 'max-content' }}
      bg='linear-gradient(180deg, rgba(23, 31, 52, 0.25) 0%, rgba(23, 31, 52, 0.25) 100%)'
      backdropFilter='blur(5px)'
      position='fixed'
      h={DEFAULT_STYLES.fullHeight}
      zIndex={10}
      transition={DEFAULT_STYLES.transition}
      transform={{
        base: `translate( ${mediaQuery ? '0%' : '-100%'})`,
        xl: 'translate(0px)',
      }}
    >
      <ColumnFlex
        w='286px'
        h={DEFAULT_STYLES.fullHeight}
        bg={DEFAULT_STYLES.deepGreen}
        borderRight={DEFAULT_STYLES.dimBorder}
        pt={DEFAULT_STYLES.sharedPx.sm}
        transition={DEFAULT_STYLES.transition}
        px='3'
        position='relative'
      >
        <IconBtn
          aria-label='Close button'
          icon={<CloseIcon color='white' />}
          display={{ base: 'flex', xl: 'none' }}
          position='absolute'
          right='5'
          top='4'
          onClick={() => {
            updateDefaultProps(false, 'media');
          }}
        />

        <Logo />

        <ColumnFlex
          flex='1'
          overflowY='auto'
          mt='10'
          pb='4'
          w='full'
        >
          <ColumnFlex gap='6' flex='1' pb='10'>
            {renderList}
          </ColumnFlex>

          <ColumnFlex gap='4'>
            <NavItem
              icon={IoIosHelpCircle}
              title='Help Center'
              path={DashRoutes.help}
            />

            <TandaFlex gap='2'>
              <Box w='full'>
                <NavItem
                  icon={FiSettings}
                  title='Account Settings'
                  path={DashRoutes.settings}
                />
              </Box>

              <IconBtn
                icon={<FiLogOut color={DEFAULT_STYLES.darkGray} />}
                aria-label='Log out'
                onClick={() => {
                  deleteCookie('type');
                  push(DashRoutes.home);
                  refresh();
                }}
              />
            </TandaFlex>
          </ColumnFlex>

          {!isBrand && (
            <>
              <TandaHDivider mt='2' />

              <HStack
                pl={DEFAULT_STYLES.sharedPx}
                mt='5'
                layerStyle='spaced'
                color='white'
              >
                <TandaFlex gap='2'>
                  <Image src={glass} alt='free trial' />
                  <Desc>Free Trial</Desc>
                </TandaFlex>

                <Desc>7 days left</Desc>
              </HStack>

              <Box mt='10' mb='8'>
                <GradientBorderBtn
                  onClick={() => {
                    alert('You are now earning with Buxx');
                  }}
                >
                  Earn
                </GradientBorderBtn>
              </Box>
            </>
          )}
        </ColumnFlex>
      </ColumnFlex>
    </Flex>
  );
};
