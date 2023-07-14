import buxx from 'assets/images/diamond.png';
import {
  ColumnFlex,
  ImageAndTitle,
  LinkIconContainer,
  SharedViewMore,
  TandaHDivider,
} from 'components';
import { FlowType, TimelineModel } from 'models';
import { DEFAULT_STYLES, layerStyles } from 'styles';
import { Stage } from './Stage';

interface Props {
  data?: TimelineModel;
  type: FlowType;
}

export const Timeline = ({ data }: Props) => {
  return (
    <ColumnFlex gap={layerStyles.modal.gap}>
      {data && (
        <>
          <TandaHDivider />

          <Stage />

          <TandaHDivider />

          <ColumnFlex
            mx={DEFAULT_STYLES.sharedPx}
            bg={DEFAULT_STYLES.darkerGrayHover}
            minH='74px'
            rounded='8'
            gap='1'
            p='4'
            justify='center'
          >
            <ImageAndTitle
              text={data.link.title!}
              textStyle='subtitle'
              stackProps={{ gap: '1' }}
              image={buxx}
              imageSize={{
                w: 14,
                h: 14,
              }}
            />

            <LinkIconContainer href={`https://${data.link.link}`}>
              {data.link.link}
            </LinkIconContainer>
          </ColumnFlex>

          <TandaHDivider />

          <SharedViewMore title='Product description' data={data.desc} />
        </>
      )}
    </ColumnFlex>
  );
};
