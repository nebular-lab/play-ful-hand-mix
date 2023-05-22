import { hoveredHandIndexState } from "@/store";
import { useRecoilCallback } from "recoil"

export const useHoveredHandIndex = () => {
  const setHoveredHandIndex = useRecoilCallback(
    ({ set }) =>
      (row: number, col: number) => {
        set(hoveredHandIndexState, { row, col });
      },
    [],
  );
  return { setHoveredHandIndex };
};