import { Button } from '@chakra-ui/react';

type Props = {
  onClick: () => void;
};
const HandRegisterButton = (props: Props) => {
  const { onClick } = props;
  return (
    <Button colorScheme={'orange'} onClick={onClick}>
      レンジ登録
    </Button>
  );
};
export default HandRegisterButton;