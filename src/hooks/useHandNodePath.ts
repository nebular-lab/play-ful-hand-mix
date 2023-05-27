import { useRecoilCallback } from 'recoil';

import { nodePathState } from '@/store';

export const useHandNodePath = () => {
  const setNodePath = useRecoilCallback(
    ({ set }) =>
      (path: Array<number | string>) => {
        set(nodePathState, path);
      },
    [],
  );
  return { setNodePath };
};
