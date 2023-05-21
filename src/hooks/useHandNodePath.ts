import { nodePathState } from '@/store';
import { useRecoilCallback } from 'recoil';

export const useHandNodePath = (path: Array<number | string>) => {
  const setNodePath = useRecoilCallback(
    ({ set }) =>
      (path: Array<number | string>) => {
        set(nodePathState, path);
      },
    [],
  );
  return { setNodePath };
};
