import { Flex } from '@chakra-ui/react';
import { FC, MutableRefObject, memo } from 'react';

import { AllRangeDrawButtonContainer } from '@/feature/AllRangeDrawButton/AllRangeDrawButtonContainer';
import DrawActionGroupContainer from '@/feature/DrawActionGroup/DrawActionGoupContainer';
import { HandMatrixContainer } from '@/feature/HandMatrix/HandMatrixContainer';
import HandRegisterButtonContainer from '@/feature/HandRegisterButton/HandRegisterButtonContainer';
import HandTreeContainer from '@/feature/HandTree/HandTreeContainer';
import IncludeSuitSelectContainer from '@/feature/IncludeSuitSelect/IncludeSuitSelectContainer';
import SelectedHandContainer from '@/feature/SelectedHand/SelectedHandContainer';

type Props = {
  isMouseDownRef: MutableRefObject<boolean>;
  onMouseDown: () => void;
  onMouseUp: () => void;
};
const EditPage: FC<Props> = (props) => {
  const { isMouseDownRef, onMouseDown, onMouseUp } = props;
  return (
    <Flex
      w={'full'}
      h={'full'}
      direction={'column'}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <Flex alignItems={'center'} h={20}>
        <HandTreeContainer />
      </Flex>
      <Flex w={'full'} h={'full'} bg={'main'} gap={2}>
        <HandMatrixContainer isMouseDownRef={isMouseDownRef} />
        <Flex w={'full'} gap={2} mt={1} direction={'column'}>
          <HandRegisterButtonContainer />
          <DrawActionGroupContainer />
          <Flex gap={2}>
            <IncludeSuitSelectContainer />
            <AllRangeDrawButtonContainer />
          </Flex>
          <SelectedHandContainer />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default memo(EditPage);
