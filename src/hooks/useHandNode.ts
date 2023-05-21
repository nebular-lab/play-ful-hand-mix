import { handNodeState, nodePathState } from '@/store';
import { CardType, HandRangeSchema, StreetNodeType } from '@/types';
import { produce } from 'immer';
import { useRecoilCallback } from 'recoil';

export const useHandNode = () => {
  const addStreetCard = useRecoilCallback(
    ({ snapshot, set }) =>
      (boardCards: CardType[], addCards: CardType[]) => {
        const handNode = snapshot.getLoadable(handNodeState).getValue();
        const nodePath = snapshot.getLoadable(nodePathState).getValue();
        const nextState = produce(handNode, (draft) => {
          let current: any = draft;
          nodePath.forEach((path) => {
            current = current[path];
          });
          //この時点でcurrentはstreetNode

          const streetNode: StreetNodeType = current;
          const OOPHandRange = HandRangeSchema.parse(streetNode.handRanges.OOP);
          const IPHandRange = HandRangeSchema.parse(streetNode.handRanges.IP);
        });
        set(handNodeState, nextState);
      },
    [],
  );
};
