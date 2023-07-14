import Image, { StaticImageData } from 'next/image';
import { TandaFlex, TandaHeading } from 'components';
import { IProps, TextStyle } from 'models';
import { textStyles } from 'styles';

interface Props extends IProps {
  icon: StaticImageData;
  textStyle: TextStyle;
}

export const ExploreHeader = ({ title, icon, textStyle }: Props) => {
  return (
    <TandaFlex gap='3'>
      <TandaHeading {...textStyles[textStyle]}>{title}</TandaHeading>
      <Image src={icon} alt={title!} width={14} height={14} />
    </TandaFlex>
  );
};
