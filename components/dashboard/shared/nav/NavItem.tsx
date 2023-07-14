import Link from 'next/link';
import { DEFAULT_STYLES } from 'styles';
import { Flex, Icon } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { IconType } from '@react-icons/all-files';
import { Desc } from 'components';

interface Props {
  icon: IconType;
  title: string;
  path: string;
}

export const NavItem = ({ icon, title, path }: Props) => {
  const pathname = usePathname();
  const isActive = pathname?.includes(path);

  const navItem = (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      pl={DEFAULT_STYLES.sharedPx.sm}
      cursor='pointer'
      bg={isActive ? DEFAULT_STYLES.yellowGradient : 'transparent'}
      gap='2'
      py='2'
      role='group'
      _hover={{
        bg: DEFAULT_STYLES.yellowGradient,
      }}
      align='center'
    >
      <Icon
        as={icon}
        color={isActive ? DEFAULT_STYLES.deepGreen : DEFAULT_STYLES.darkGray}
        _groupHover={{
          color: DEFAULT_STYLES.deepGreen,
        }}
      />

      <Desc
        color={isActive ? DEFAULT_STYLES.deepGreen : DEFAULT_STYLES.darkGray}
        _groupHover={{
          color: DEFAULT_STYLES.deepGreen,
        }}
      >
        {title}
      </Desc>
    </Flex>
  );

  return <Link href={path}>{navItem}</Link>;
};
