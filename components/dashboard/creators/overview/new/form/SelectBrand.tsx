import { Flex } from '@chakra-ui/react';
import { NewUserChangeHandler, brandOptions, useNewCreatorStore } from 'store';
import { ActiveCard, Details, GridSharedSpan } from 'components';

export const SelectBrand = () => {
  const brands = useNewCreatorStore((s) => s.brands);
  const { onBrandsChange } = NewUserChangeHandler;

  const renderOptions = brandOptions.map((option) => {
    const isActive = brands?.includes(option);

    return (
      <ActiveCard
        key={option}
        item={option}
        padding='10px 20px'
        isActive={isActive}
        onClick={() => {
          onBrandsChange(option);
        }}
      />
    );
  });

  return (
    <>
      <GridSharedSpan mb='4'>
        <Details title='Choose up to 5 – you can change them later' />
      </GridSharedSpan>

      <GridSharedSpan mb='16'>
        <Flex flexWrap='wrap' w='full' gap='5'>
          {renderOptions}
        </Flex>
      </GridSharedSpan>
    </>
  );
};
