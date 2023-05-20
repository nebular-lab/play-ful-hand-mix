import DrawActionGroupContainer from '@/feature/DrawActionGroup/DrawActionGoupContainer';
import { HandMatrixContainer } from '@/feature/HandMatrix/HandMatrixContainer';
import { Flex } from '@chakra-ui/react';

const EditPage = () => {
  return (
    <Flex w={'full'} h={'full'} direction={'column'}>
      <Flex w={'full'} h={20} bg={'gray.100'}>
        ヘッダー
      </Flex>
      <Flex w={'full'} h={'full'} bg={'main'} gap={2}>
        <HandMatrixContainer />
        <Flex w={'full'} mt={1}>
          <DrawActionGroupContainer />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default EditPage;
