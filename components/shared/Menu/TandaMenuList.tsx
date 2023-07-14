import {
  MenuGroup,
  MenuItem,
  MenuListProps,
  MenuProps,
} from '@chakra-ui/react';
import { ButtonVariants, MenuOption } from 'models';
import { DEFAULT_STYLES } from 'styles';
import { SharedMenu } from './SharedMenu';
import { TandaFlex } from 'components';
import { CheckIcon } from '@chakra-ui/icons';

interface Props {
  btnText: string;
  list?: MenuOption[];
  onChange?: (id: string, opts: string) => void;
  selected?: string;
  btnVariant?: ButtonVariants;
  listProps?: MenuListProps;
  isCheckType?: boolean;
  groupTitle?: string;
  menuProps?: MenuProps;
}

export const TandaMenuList = ({
  btnText,
  list,
  onChange,
  selected,
  listProps,
  isCheckType,
  btnVariant,
  groupTitle,
  menuProps,
}: Props) => {
  const renderOptions = list?.map((opts) => {
    const isActive = opts.value === selected;

    return (
      <MenuItem
        bg='transparent'
        textStyle='body'
        fontWeight={
          isActive ? DEFAULT_STYLES.bold : DEFAULT_STYLES.normalFontWeight
        }
        key={opts.id}
      >
        <TandaFlex w='full'>
          <option
            onClick={() => {
              onChange?.(opts.id, opts.value);
            }}
            style={{
              flex: '1',
            }}
          >
            {opts.name}
          </option>

          {isCheckType && isActive && <CheckIcon />}
        </TandaFlex>
      </MenuItem>
    );
  });

  return (
    <SharedMenu
      btnText={btnText}
      btnVariant={btnVariant}
      listProps={listProps}
      menuProps={menuProps}
    >
      <MenuGroup title={groupTitle}>{renderOptions}</MenuGroup>
    </SharedMenu>
  );
};
