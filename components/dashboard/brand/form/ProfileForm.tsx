import {
  ActiveCard,
  ColumnFlex,
  DashButton,
  Details,
  GridSharedSpan,
  TandaFlex,
  TandaInput,
  TandaMenuList,
} from 'components';
import { SharedForm } from './shared';
import {
  NewCampaignChangeHandler,
  genders,
  locations,
  useNewCampaignStore,
} from 'store';
import { Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import { RiAddFill } from '@react-icons/all-files/ri/RiAddFill';

export const ProfileForm = () => {
  const [showAdd, setShowAdd] = useState(false);
  const { onLocationChange, onGenderChange } = NewCampaignChangeHandler;
  const location = useNewCampaignStore((s) => s.location);
  const gender = useNewCampaignStore((s) => s.gender);

  const renderLocations = locations.map((e) => {
    const isActive = location === e.name;

    return (
      <ActiveCard
        key={e.id}
        item={e.text}
        padding='5px 10px'
        isActive={isActive}
        textStyle='boldDesc'
        rounded='5'
        onClick={() => onLocationChange(e.name)}
      />
    );
  });

  const renderGenders = genders.map((e) => {
    const isActive = gender === e;

    return (
      <ActiveCard
        key={e}
        item={e}
        padding='5px 10px'
        isActive={isActive}
        textStyle='boldDesc'
        textTransform='capitalize'
        rounded='5'
        onClick={() => onGenderChange(e)}
      />
    );
  });

  return (
    <>
      <GridSharedSpan>
        <SharedForm title='Location'>
          <TandaFlex gap='3'>{renderLocations}</TandaFlex>
        </SharedForm>
      </GridSharedSpan>

      <GridSharedSpan>
        <SharedForm title='Niche'>
          <TandaInput>
            <TandaMenuList btnText='Any' btnVariant='whiteBg' />
          </TandaInput>
        </SharedForm>
      </GridSharedSpan>

      <GridSharedSpan>
        <SharedForm title='Gender'>
          <TandaFlex gap='3'>{renderGenders}</TandaFlex>
        </SharedForm>
      </GridSharedSpan>

      <SharedForm title='Min Age'>
        <TandaInput>
          <TandaMenuList btnText='18' btnVariant='whiteBg' />
        </TandaInput>
      </SharedForm>

      <SharedForm title='Max Age'>
        <TandaInput>
          <TandaMenuList btnText='35+' btnVariant='whiteBg' />
        </TandaInput>
      </SharedForm>

      <SharedForm title='Min followers'>
        <TandaInput>
          <TandaMenuList btnText='' btnVariant='whiteBg' />
        </TandaInput>
      </SharedForm>

      <SharedForm title='Max followers'>
        <TandaInput>
          <TandaMenuList btnText='' btnVariant='whiteBg' />
        </TandaInput>
      </SharedForm>

      <GridSharedSpan>
        <ColumnFlex gap='4'>
          <TandaFlex align='flex-start' w='max-content' gap='2'>
            <Checkbox
              size='lg'
              mt='1'
              onChange={(e) => {
                setShowAdd(e.target.checked);
              }}
            />

            <ColumnFlex>
              <Details
                gap='0'
                title='Manually pick creators (optional)'
                headTextStyle='subtitle'
                textStyle='desc'
                desc=' Add creators to this campaign directly from our creator
                marketplace.'
              />
            </ColumnFlex>
          </TandaFlex>

          {showAdd && (
            <DashButton icon={RiAddFill} text='Add creators' minH='60px' />
          )}
        </ColumnFlex>
      </GridSharedSpan>
    </>
  );
};
