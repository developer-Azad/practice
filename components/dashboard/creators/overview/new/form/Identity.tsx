import {
  ColumnFlex,
  Details,
  GridSharedSpan,
  TandaHeading,
  TandaInput,
  TandaSelect,
  UploadBtn,
} from 'components';
import { Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { ImageData } from 'models';
import { textStyles } from 'styles';

export const IdentityForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <GridSharedSpan mb='8'>
        <Details
          title='Upload additional document'
          desc={
            <>
              In other to verify your information, kindly provide a government
              issued means of <br />
              identification.
            </>
          }
        />
      </GridSharedSpan>

      <GridSharedSpan>
        <TandaInput label='Identity'>
          <TandaSelect />
        </TandaInput>
      </GridSharedSpan>

      <GridSharedSpan>
        <TandaInput
          onChange={(e) => {
            console.log(e);
          }}
          label='ID number'
          inputProps={{
            type: 'number',
          }}
        />
      </GridSharedSpan>

      <ColumnFlex gap='2' mb='12'>
        <TandaHeading {...textStyles.bolderBody}>
          Upload additional document
        </TandaHeading>

        <Input
          type='file'
          display='none'
          ref={inputRef}
          onChange={(e) => {
            console.log(ImageData.create(e));
          }}
        />

        <UploadBtn btnText='Document' />
      </ColumnFlex>
    </>
  );
};
