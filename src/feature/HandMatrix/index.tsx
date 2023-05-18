import { HandRangeType, HandSquareSchema } from '@/types';
import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { HandSquare } from '../HandSquare';
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
          <Flex>
            {handRow.map((hands, colIndex) => {
              return (
                <HandSquareContainer
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
