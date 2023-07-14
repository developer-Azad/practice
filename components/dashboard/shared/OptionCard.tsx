import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Center, CenterProps, Tooltip } from '@chakra-ui/react';
import { Details, GradientBox } from 'components';
import { IProps } from 'models';
import { DEFAULT_STYLES } from 'styles';
import { rgba, pxToRem } from 'utils';

interface Props extends IProps, CenterProps {
  isActive?: boolean;
  onClick?: () => void;
  tip?: string;
}

export const OptionCard = ({
  isActive,
  onClick,
  desc,
  tip,
  title,
  ...r
}: Props) => {
  return (
    <GradientBox p={isActive ? '2px' : '0px'} rounded='5' minH='100px'>
      <Center
        bg='white'
        rounded='5'
        flex='1'
        pos='relative'
        px={{ base: '2', md: '8' }}
        py='3'
        color={rgba(DEFAULT_STYLES.primaryDark, 0.8)}
        cursor='pointer'
        onClick={onClick}
        {...r}
      >
        {tip && (
          <Tooltip
            hasArrow
            label={tip}
            placement='right-end'
            aria-label={tip}
            fontSize={pxToRem(11)}
            fontWeight={DEFAULT_STYLES.normalFontWeight}
          >
            <InfoOutlineIcon
              color={DEFAULT_STYLES.gray}
              pos='absolute'
              top='2'
              right='2'
              fontSize={pxToRem(17)}
            />
          </Tooltip>
        )}

        <Details
          title={title}
          desc={desc}
          textStyle='desc'
          headTextStyle='subtitle'
          textColor={rgba(DEFAULT_STYLES.primaryDark, 0.8)}
        />
      </Center>
    </GradientBox>
  );
};
