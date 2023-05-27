import { useRecoilState } from 'recoil';

import { handNodeState } from '@/store';

import HandTree from '.';

const HandTreeContainer = () => {
  const [handNode] = useRecoilState(handNodeState);
  return <HandTree handTree={handNode} />;
};
export default HandTreeContainer;
