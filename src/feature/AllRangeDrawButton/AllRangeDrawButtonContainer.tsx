import { Button } from '@chakra-ui/react';

import { useHandRange } from '@/hooks/useHandRange';

export const AllRangeDrawButtonContainer = () => {
  const { drawAllRange } = useHandRange();
  return (
    <Button colorScheme={'orange'} onClick={drawAllRange}>
      全レンジ描画
    </Button>
  );
};
