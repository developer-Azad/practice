import { Button, Input } from '@chakra-ui/react';
import { ImageData } from 'models';
import { useRef } from 'react';
import { FiUpload } from '@react-icons/all-files/fi/FiUpload';
import { DEFAULT_STYLES } from 'styles';

interface Props {
  onChange?: (e: any) => void;
  btnText?: string;
  accept?: string;
}

export const UploadBtn = ({ onChange, btnText, accept }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Input
        type='file'
        display='none'
        ref={inputRef}
        accept={accept ?? '*/*'}
        onChange={(e) => {
          console.log(ImageData.create(e));
          onChange?.(ImageData.create(e));
        }}
      />

      <Button
        leftIcon={<FiUpload fontSize='1rem' />}
        variant='noBg'
        minW='130px'
        maxW='max-content'
        color='white'
        fontSize={DEFAULT_STYLES.desc}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        Upload {btnText}
      </Button>
    </>
  );
};
