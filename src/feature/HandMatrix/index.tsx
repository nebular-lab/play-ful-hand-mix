import { HandRangeType } from '@/types';
import { Flex } from '@chakra-ui/react';
import { FC, memo } from 'react';
import HandSquareContainer from '../HandSquare/HandSquareContainer';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const HandMatrix = () => {
  const thirteenArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Flex direction={'column'}>
      {thirteenArray.map((row) => {
        return (
          <Flex key={row}>
            {thirteenArray.map((col) => {
              return <HandSquareContainer key={col} row={row} col={col} />;
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default memo(HandMatrix);
