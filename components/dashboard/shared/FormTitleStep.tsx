import { ColumnFlex, Desc, TandaHeading } from 'components';
import { DEFAULT_STYLES, inter, textStyles } from 'styles';
import { Box, Center, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  title: ReactNode;
  currentStep: string;
  steps: string[];
}

export const FormTitleStep = ({ title, currentStep, steps }: Props) => {
  const renderSteps = steps.map((s, i) => {
    const showLine = i !== steps.length - 1;
    const isActive = currentStep === s;

    return (
      <ColumnFlex key={s} gap='1'>
        <Flex align='center'>
          <Center
            w={{ base: '35px', sm: '50px' }}
            h={{ base: '35px', sm: '50px' }}
            bg={DEFAULT_STYLES.yellowGradient}
            p='0.5'
            rounded='full'
          >
            <Flex
              w='full'
              height='full'
              layerStyle='centered'
              bg={isActive ? 'transparent' : DEFAULT_STYLES.deepGreen}
              rounded='full'
              color={isActive ? DEFAULT_STYLES.deepGreen : 'white'}
              fontWeight={DEFAULT_STYLES.mediumbold}
              fontFamily={inter.style.fontFamily}
              transition={DEFAULT_STYLES.transition}
            >
              {i + 1}
            </Flex>
          </Center>

          {showLine && (
            <Box
              w={{ base: '30px', sm: '45px', md: '65px' }}
              border={DEFAULT_STYLES.border}
            />
          )}
        </Flex>

        <Desc userSelect='none'>{s}</Desc>
      </ColumnFlex>
    );
  });

  return (
    <ColumnFlex
      alignSelf='center'
      maxW={{ base: '90%', md: '700px', lg: '867px' }}
      align='center'
      gap='6'
    >
      <TandaHeading textAlign='center' {...textStyles.header}>
        {title}
      </TandaHeading>

      <Flex maxW='571px'>{renderSteps}</Flex>
    </ColumnFlex>
  );
};
