import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuListProps,
  Text,
  MenuProps,
} from '@chakra-ui/react';
import { ButtonVariants, LayoutProps } from 'models';
import { pxToRem } from 'utils';

interface Props extends LayoutProps {
  btnText: string;
  btnVariant?: ButtonVariants;
  listProps?: MenuListProps;
  menuProps?: MenuProps;
}

export const SharedMenu = ({
  btnText,
  children,
  listProps,
  btnVariant,
  menuProps,
}: Props) => {
  return (
    <Menu isLazy autoSelect={false} {...menuProps}>
      <MenuButton
        as={Button}
        variant={btnVariant}
        rightIcon={<ChevronDownIcon fontSize={pxToRem(20)} />}
        pos='relative'
        minW='full'
      >
        <Text pos='absolute' top='3'>
          {btnText}
        </Text>
      </MenuButton>

      <MenuList {...listProps}>{children}</MenuList>
    </Menu>
  );
};
