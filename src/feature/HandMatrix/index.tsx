import { HandRangeType } from '@/types';
import { Flex } from '@chakra-ui/react';
import { FC, MutableRefObject, memo } from 'react';
import HandSquareContainer from '../HandSquare/HandSquareContainer';
import { useRecoilState } from 'recoil';
import { selectedHandIndexState } from '@/store';

type Props = {
  isMouseDownRef: MutableRefObject<boolean>;
  selectedHandIndex: { row: number; col: number } | null;
};
const HandMatrix: FC<Props> = (props) => {
  const { isMouseDownRef, selectedHandIndex } = props;
  const thirteenArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Flex direction={'column'}>
      {thirteenArray.map((row) => {
        return (
          <Flex key={row}>
            {thirteenArray.map((col) => {
              return (
                <HandSquareContainerContainer
                  key={`${row} ${col}`}
                  row={row}
                  col={col}
                  isMouseDownRef={isMouseDownRef}
                />
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default memo(HandMatrix);

const HandSquareContainerContainer = memo(
  (props: {
    row: number;
    col: number;
    isMouseDownRef: MutableRefObject<boolean>;
  }) => {
    const { row, col, isMouseDownRef } = props;
    const [selectedHandIndex] = useRecoilState(selectedHandIndexState);
    const isSelected =
      selectedHandIndex?.row === row && selectedHandIndex?.col === col;
    return (
      <HandSquareContainer
        row={row}
        col={col}
        isMouseDownRef={isMouseDownRef}
        isSelected={isSelected}
      />
    );
  },
);
HandSquareContainerContainer.displayName = 'HandSquareContainerContainer';
