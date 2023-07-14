import Image from 'next/image';
import bgImage from 'assets/images/explorecardbg.png';
import { ColumnFlex } from 'components';
import { ExploreData } from 'models';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { ExploreHeader } from './ExploreHeader';
import { ExploreListComp } from './ExploreList';
import { ExploreFormModal } from './ExploreFormModal';
import { ExploreModal } from './ExploreModal';

export const ExploreCard = ({ title, icon, list, id: dataId }: ExploreData) => {
  const [id, setId] = useState<string>();
  const [formId, setFormId] = useState<string>();

  const toggleSideModal = (id?: string) => {
    setId(id);
  };

  const toggleFormModal = (id?: string) => {
    setFormId(id);
  };

  const handleClick = (e: any, id?: string) => {
    if (e.target.id === 'open pitch') {
      toggleFormModal(id);
    } else {
      toggleSideModal(id);
    }
  };

  return (
    <>
      <ColumnFlex
        layerStyle='card'
        minH='300px'
        rounded='16px'
        position='relative'
        padding='0'
        cursor='pointer'
        onClick={(e) => {
          handleClick(e, dataId);
        }}
        _after={{
          content: '""',
          position: 'absolute',
          top: '0',
          lef: '0',
          width: '100%',
          height: '100%',
          bg: 'rgba(30, 39, 51, 0.82)',
          rounded: '16px',
        }}
      >
        <Image src={bgImage} alt='background' fill sizes='100vw' />

        <ColumnFlex padding='24px 28px' zIndex={1} gap='7'>
          <ExploreHeader textStyle='subtitle' title={title} icon={icon} />

          <ExploreListComp list={list} />

          <Button
            alignSelf='flex-end'
            rounded='30'
            mt='3'
            id='open pitch'
            onClick={(e) => {
              handleClick(e, dataId);
            }}
          >
            Explore
          </Button>
        </ColumnFlex>
      </ColumnFlex>

      <ExploreModal onClose={toggleSideModal} id={id} />
      <ExploreFormModal onClose={toggleFormModal} id={formId} />
    </>
  );
};
