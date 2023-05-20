import { ActionType } from '@/types';
import { Flex } from '@chakra-ui/react';
import { FC, memo } from 'react';
import DrawActionContainer from '../DrawAction/DrawActionContainer';

type Props = {
  actions: ActionType[];
};
const DrawActionGroup: FC<Props> = (props) => {
  const { actions } = props;
  return (
    <Flex gap={1} w={'full'} h={'fit-content'}>
      {actions.map((action, index) => {
        return <DrawActionContainer key={index} action={action} />;
      })}
    </Flex>
  );
};
export default memo(DrawActionGroup);
