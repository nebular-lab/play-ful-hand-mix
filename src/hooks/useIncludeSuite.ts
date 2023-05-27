import { useRecoilCallback } from 'recoil';

import { includeSuitState } from '@/store';
import { CardMarkType } from '@/types';

export const useIncludeSuit = () => {
  const toggleIncludeSuit = useRecoilCallback(
    ({ set, snapshot }) =>
      (toggleSuit: CardMarkType) => {
        const includeSuit = snapshot.getLoadable(includeSuitState).getValue();
        const nextState = includeSuit.map(([suit, isSelect]) => {
          if (suit === toggleSuit) {
            return [suit, !isSelect] as [CardMarkType, boolean];
          } else {
            return [suit, isSelect] as [CardMarkType, boolean];
          }
        });
        set(includeSuitState, nextState);
      },
    [],
  );

  return { toggleIncludeSuit };
};
