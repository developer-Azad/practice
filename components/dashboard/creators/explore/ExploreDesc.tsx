import { SharedViewMore } from 'components';
import { ExploreData } from 'models';

type Props = Pick<ExploreData, 'desc'>;

export const ExploreDesc = ({ desc }: Props) => {
  return <SharedViewMore title='Product description' data={desc} />;
};
