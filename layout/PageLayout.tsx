import { ColumnFlex, ProfileBar } from 'components';
import { useDefaultContext } from 'context';
import { LayoutProps } from 'models';
import { DEFAULT_STYLES } from 'styles';

export const PageLayout = ({ children }: LayoutProps) => {
  const { showAvatar } = useDefaultContext();

  return (
    <ColumnFlex
      width={DEFAULT_STYLES.fullWidth}
      align='center'
      position='relative'
      color='white'
      ml={{ base: '0', xl: '286px' }}
    >
      <ProfileBar />

      <ColumnFlex
        layerStyle='container'
        px={DEFAULT_STYLES.mobilePx}
        mb={{ base: '35px', lg: '50px' }}
        mt={{
          base: showAvatar ? '85px' : '70px',
          xl: showAvatar ? '100px' : '80px',
        }}
      >
        {children}
      </ColumnFlex>
    </ColumnFlex>
  );
};
