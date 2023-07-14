import { GridSharedSpan, TandaInput, TandaSelect } from 'components';
import { IdentityForm } from './Identity';
import { useNewCreatorStore } from 'store';

export const DetailsForm = () => {
  const showIdentity = useNewCreatorStore((s) => s.showIdentity);

  return (
    <>
      {showIdentity ? (
        <IdentityForm />
      ) : (
        <>
          <TandaInput
            onChange={(e) => {
              console.log(e);
            }}
            label='First Name'
            inputProps={{
              placeholder: 'Kunle',
            }}
          />

          <TandaInput
            onChange={(e) => {
              console.log(e);
            }}
            label='Last Name'
            inputProps={{
              placeholder: 'Pam',
            }}
          />

          <GridSharedSpan>
            <TandaInput
              onChange={(e) => {
                console.log(e);
              }}
              label='Email'
              inputProps={{
                placeholder: 'kunle@gmail.com',
                type: 'email',
              }}
            />
          </GridSharedSpan>

          <TandaInput
            onChange={(e) => {
              console.log(e);
            }}
            inputProps={{
              type: 'date',
            }}
            label='Date of Birth'
          />

          <TandaInput label='Nationality'>
            <TandaSelect placeholder='Nigeria' />
          </TandaInput>

          <TandaInput
            onChange={(e) => {
              console.log(e);
            }}
            label='BVN'
            inputProps={{
              placeholder: '1234567866000',
              type: 'number',
            }}
          />

          <TandaInput label='Legal status'>
            <TandaSelect placeholder='Individual' />
          </TandaInput>

          <GridSharedSpan>
            <TandaInput
              onChange={(e) => {
                console.log(e);
              }}
              label='Doing Business as (optional)'
            />
          </GridSharedSpan>

          <GridSharedSpan>
            <TandaInput
              onChange={(e) => {
                console.log(e);
              }}
              label='Street'
              inputProps={{
                placeholder: 'Enter a location',
              }}
            />
          </GridSharedSpan>

          <TandaInput
            onChange={(e) => {
              console.log(e);
            }}
            label='City'
            inputProps={{
              placeholder: 'Enter your city',
            }}
          />

          <TandaInput label='State'>
            <TandaSelect placeholder='Select state' />
          </TandaInput>

          <TandaInput
            onChange={(e) => {
              console.log(e);
            }}
            label='Zip'
            inputProps={{
              placeholder: 'Enter zipcode',
            }}
          />

          <TandaInput
            onChange={(e) => {
              console.log(e);
            }}
            label='Phone number'
            inputProps={{
              type: 'tel',
              placeholder: 'Enter phone number',
            }}
          />
        </>
      )}
    </>
  );
};
