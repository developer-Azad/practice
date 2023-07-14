import Image from 'next/image';
import { ColumnFlex, TandaFlex } from 'components';
import { FlowModel } from 'models';
import { DEFAULT_STYLES, textStyles } from 'styles';
import { Icon, Text } from '@chakra-ui/react';
import { MdOndemandVideo } from 'react-icons/md';
import { IconType } from '@react-icons/all-files';
import { HiOutlinePhotograph } from '@react-icons/all-files/hi/HiOutlinePhotograph';
import { BiNews } from '@react-icons/all-files/bi/BiNews';
import { Fragment, useState } from 'react';
import { FlowModal } from './FlowModal';

export const FlowDataCard = ({ icon, type, num, data }: FlowModel) => {
  const [id, setId] = useState<string>();

  const toggleSideModal = (id?: string) => {
    setId(id);
  };

  const renderData = data.map((item) => {
    return (
      <Fragment key={item.id}>
        <TandaFlex
          bg={DEFAULT_STYLES.darkerGrayHover}
          cursor='pointer'
          minH='50px'
          rounded='5'
          px='2'
          py='3'
          layerStyle='spaced'
          gap='2'
          onClick={() => {
            toggleSideModal(item.id);
          }}
        >
          <ColumnFlex gap='3'>
            <Text textStyle='tiny' color='white'>
              {item.price}
            </Text>

            <TandaFlex gap='1'>
              <FlowInfo desc={item.picNumber} icon={MdOndemandVideo} />
              <FlowInfo desc={item.picNumber} icon={HiOutlinePhotograph} />
              <FlowInfo desc={item.task} icon={BiNews} />
            </TandaFlex>

            <Text textStyle='tiny' color='white'>
              {item.desc}
            </Text>
          </ColumnFlex>

          <Image src={item.icon} alt='show' />
        </TandaFlex>

        <FlowModal id={id} onClose={toggleSideModal} data={data} type={type} />
      </Fragment>
    );
  });

  return (
    <ColumnFlex
      gap={{ base: '4', '2xl': '8' }}
      w={{ base: '200px', '2xl': 'auto' }}
    >
      <TandaFlex gap='1' minH='30px'>
        <Image src={icon} alt={type} />
        <Text textStyle='body'>{`${type} (${num})`}</Text>
      </TandaFlex>

      <ColumnFlex flex='1'>
        <>{renderData}</>
      </ColumnFlex>
    </ColumnFlex>
  );
};

// Reuseable
interface InfoProps {
  icon: IconType;
  desc: string | number;
}

const FlowInfo = ({ icon, desc }: InfoProps) => {
  return (
    <TandaFlex
      bg={DEFAULT_STYLES.yellowGradient}
      gap='1'
      rounded='lg'
      padding='1px 3px'
      minW='14px'
      minH='7px'
    >
      <Icon as={icon} color='#555B63' fontSize={textStyles.body.fontSize} />
      <Text textStyle='xs' color={DEFAULT_STYLES.darkerGrayHover}>
        {desc}
      </Text>
    </TandaFlex>
  );
};
