import Image, { StaticImageData } from 'next/image';
import { HStack, Icon, StackProps } from '@chakra-ui/react';
import { textStyles } from 'styles';
import { IconType } from '@react-icons/all-files';
import { TandaHeading } from 'components';
import { TextStyle } from 'models';

interface Props {
  stackProps?: StackProps;
  text: string;
  textStyle: TextStyle;
  image?: StaticImageData;
  imageSize?: { w: number; h: number };
  icon?: IconType;
}

export const ImageAndTitle = ({
  stackProps,
  image,
  text,
  textStyle,
  icon,
  imageSize,
}: Props) => {
  return (
    <HStack {...stackProps}>
      {image && (
        <Image
          src={image}
          alt={text}
          quality={100}
          width={imageSize?.w ?? 17}
          height={imageSize?.h ?? 17}
        />
      )}

      {icon && <Icon as={icon} />}

      <TandaHeading textTransform='capitalize' {...textStyles[textStyle]}>
        {text}
      </TandaHeading>
    </HStack>
  );
};
