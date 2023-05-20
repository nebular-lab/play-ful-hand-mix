import { handNodeState } from '@/store';
import { useRecoilState } from 'recoil';
import HandTree from '.';

const HandTreeContainer = () => {
  const [handNode] = useRecoilState(handNodeState);
  return <HandTree handTree={handNode} />;
};
export default HandTreeContainer;
