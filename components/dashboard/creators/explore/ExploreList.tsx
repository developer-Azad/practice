import { ExploreData } from 'models';
import { ColumnFlex, ImageAndTitle } from 'components';

type Props = Pick<ExploreData, 'list'>;

export const ExploreListComp = ({ list }: Props) => {
  const renderList = list.map((item) => {
    return (
      <ImageAndTitle
        key={item.id}
        stackProps={{
          gap: '2',
        }}
        text={item.title}
        icon={item.icon}
        textStyle='desc'
      />
    );
  });

  return (
    <ColumnFlex align='flex-start' gap='4' color='white'>
      {renderList}
    </ColumnFlex>
  );
};
