import { ColumnFlex, Span, TandaHeading } from 'components';
import { ColumnFlexProps, IProps, TextStyle } from 'models';
import { DEFAULT_STYLES, textStyles } from 'styles';

interface Props extends IProps, ColumnFlexProps {
  headTextStyle?: TextStyle;
  textStyle?: TextStyle;
  textColor?: string;
}

export const Details = ({
  title,
  desc,
  headTextStyle,
  textStyle,
  textColor,
  ...r
}: Props) => {
  return (
    <ColumnFlex {...r} gap={r.gap ?? '1.5'}>
      <TandaHeading
        {...textStyles[headTextStyle ?? 'title']}
        fontWeight={DEFAULT_STYLES.semibold}
      >
        {title}
      </TandaHeading>

      {desc && (
        <Span textStyle={textStyle ?? 'body'} color={textColor ?? '#D2D4D6'}>
          {desc}
        </Span>
      )}
    </ColumnFlex>
  );
};
