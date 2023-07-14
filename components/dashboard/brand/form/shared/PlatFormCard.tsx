import Image from 'next/image';
import { ColumnFlex, GradientBox, TandaHeading } from 'components';
import { SocialMedia } from 'models';
import { socialMediaImgs, pxToRem } from 'utils';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { NewCampaignChangeHandler, useNewCampaignStore } from 'store';

interface Props {
  name: SocialMedia;
}

export const PlatFormCard = ({ name }: Props) => {
  const { platform } = useNewCampaignStore();
  // Remember to refactor employer ui to take this structure
  const { onPlatFormChange } = NewCampaignChangeHandler;
  const isActive = name === platform;

  return (
    <GradientBox p={isActive ? '2px' : '0px'} rounded='10'>
      <ColumnFlex
        w='full'
        minH={pxToRem(122)}
        bg='white'
        rounded='10'
        layerStyle='centered'
        gap='2'
        cursor='pointer'
        onClick={() => {
          onPlatFormChange(name);
        }}
      >
        <Image
          src={socialMediaImgs[name]}
          alt={name}
          width={38}
          height={38}
          quality={100}
        />

        <TandaHeading
          {...textStyles.boldDesc}
          color={DEFAULT_STYLES.gray}
          textTransform='capitalize'
        >
          {name}
        </TandaHeading>
      </ColumnFlex>
    </GradientBox>
  );
};
