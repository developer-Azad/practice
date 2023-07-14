import { ColumnFlex, GradientBorderBtn, TandaHeading } from 'components';
import { ProductDescription } from 'models';
import {
  VStack,
  Box,
  Icon,
  Text,
  StackProps,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { MinusIcon } from '@chakra-ui/icons';
import { textStyles } from 'styles';

interface Props extends StackProps {
  data?: ProductDescription[];
}

export const SharedViewMore = ({ title, data, ...r }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const sharedP = '5';

  const showAllChangeHandler = () => {
    setShowAll((p) => !p);
  };

  const renderDesc = data?.map(({ details, title }, i) => {
    const text =
      typeof details === 'string' ? (
        <Text textStyle='body'>{details}</Text>
      ) : (
        details.map((item) => {
          return (
            <ListItem key={item} textStyle='body'>
              <ListIcon as={MinusIcon} />
              {item}
            </ListItem>
          );
        })
      );

    return (
      <ColumnFlex key={`${i + details.length} `} gap='1.5'>
        {title && <Text textStyle='smallSubtitle'>{title} </Text>}
        {Array.isArray(text) ? <List>{text}</List> : text}
      </ColumnFlex>
    );
  });

  return (
    <>
      <VStack
        align='flex-start'
        px={sharedP}
        h={showAll ? 'full' : '140px'}
        overflowY={showAll ? undefined : 'clip'}
        gap='1'
        {...r}
      >
        <TandaHeading {...textStyles.subtitle}>{title}</TandaHeading>

        {renderDesc}
      </VStack>

      <Box px={sharedP}>
        <GradientBorderBtn
          onClick={showAllChangeHandler}
          rightIcon={
            <Icon
              as={!showAll ? IoIosArrowDown : IoIosArrowUp}
              fontSize='1.2rem'
            />
          }
        >
          View {showAll ? 'less' : 'more'}
        </GradientBorderBtn>
      </Box>
    </>
  );
};
