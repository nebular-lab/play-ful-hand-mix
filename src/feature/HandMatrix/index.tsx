import { HandRangeType } from '@/types';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { HandSquareContainer } from '../HandSquare/HandSquareContainer';

type Props = {
  handRange: HandRangeType;
};
export const HandMatrix: FC<Props> = (props) => {
  const { handRange } = props;
  return (
    <Flex direction={'column'}>
      {handRange.map((handRow, rowIndex) => {
        return (
          <Flex key={rowIndex}>
            {handRow.map((hands, colIndex) => {
              return (
                <HandSquareContainer
                  key={colIndex}
                  hands={hands.hands}
                  suit={hands.suit}
                  row={rowIndex}
                  col={colIndex}
                />
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};
