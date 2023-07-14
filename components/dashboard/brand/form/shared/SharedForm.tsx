import { ColumnFlex, Details } from 'components';
import { IProps, LayoutProps } from 'models';

interface Props extends IProps, LayoutProps {}

export const SharedForm = ({ children, desc, title }: Props) => {
  return (
    <ColumnFlex w='full' gap='3'>
      <Details
        title={title}
        desc={desc}
        headTextStyle='subtitle'
        textStyle='desc'
      />
      {children}
    </ColumnFlex>
  );
};
