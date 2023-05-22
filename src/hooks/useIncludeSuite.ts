import { includeSuitState } from '@/store';
import { CardMarkType } from '@/types';
import { useRecoilCallback } from 'recoil';

export const useIncludeSuit = () => {
  const toggleIncludeSuit = useRecoilCallback(
    ({ set, snapshot }) =>
      (suit: CardMarkType) => {
        const includeSuit = snapshot.getLoadable(includeSuitState).getValue();
        set(includeSuitState, {
          ...includeSuit,
          [suit]: !includeSuit[suit],
        });
      },
    [],
  );

  return { toggleIncludeSuit };
};
