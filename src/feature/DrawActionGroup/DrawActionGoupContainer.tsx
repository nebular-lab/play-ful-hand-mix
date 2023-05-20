import { useRecoilState } from 'recoil';
import { drawActionsState } from '@/store';
import DrawActionGroup from '.';

const DrawActionGroupContainer = () => {
  const [drawActions] = useRecoilState(drawActionsState);
  return <DrawActionGroup actions={drawActions} />;
};
export default DrawActionGroupContainer;
