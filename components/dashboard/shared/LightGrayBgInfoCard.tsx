import { Desc } from 'components';
import { DEFAULT_STYLES } from 'styles';
import { TextProps } from '@chakra-ui/react';

export const LightGrayBgInfoCard = ({ children, ...r }: TextProps) => {
  return (
    <Desc
      bg={DEFAULT_STYLES.lighterGray}
      w='max-content'
      rounded='4'
      padding='4px 8px'
      {...r}
    >
      {children}
    </Desc>
  );
};
