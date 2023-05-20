import DrawActionGroupContainer from '@/feature/DrawActionGroup/DrawActionGoupContainer';
import { HandMatrixContainer } from '@/feature/HandMatrix/HandMatrixContainer';
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
      <Flex w={'full'} h={20} bg={'gray.100'}>
        ヘッダー
      </Flex>
      <Flex w={'full'} h={'full'} bg={'main'} gap={2}>
        <HandMatrixContainer isMouseDownRef={isMouseDownRef}/>
        <Flex w={'full'} mt={1}>
          <DrawActionGroupContainer />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default memo(EditPage);
