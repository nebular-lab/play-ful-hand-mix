import { AllRangeDrawButtonContainer } from '@/feature/AllRangeDrawButton/AllRangeDrawButtonContainer';
import DrawActionGroupContainer from '@/feature/DrawActionGroup/DrawActionGoupContainer';
import { HandMatrixContainer } from '@/feature/HandMatrix/HandMatrixContainer';
import HandRegisterButton from '@/feature/HandRegisterButton';
import HandRegisterButtonContainer from '@/feature/HandRegisterButton/HandRegisterButtonContainer';
import HandTree from '@/feature/HandTree';
import HandTreeContainer from '@/feature/HandTree/HandTreeContainer';
import IncludeSuitSelectContainer from '@/feature/IncludeSuitSelect/IncludeSuitSelectContainer';
import { Flex } from '@chakra-ui/react';
import { FC, MutableRefObject, memo } from 'react';

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
      <Flex w={'full'} h={14} bg={'gray.100'}>
        ヘッダー
      </Flex>
      <Flex py={4} px={2}>
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
        </Flex>
      </Flex>
    </Flex>
  );
};
export default memo(EditPage);
