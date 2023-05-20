import { isSpreadElement } from 'typescript';
import StreetTag from '.';
import { memo } from 'react';

type Props = {
  onClick: () => void;
  isSelected: boolean;
};
const StreetTagContainer = (props: Props) => {
  const { onClick, isSelected } = props;
  return <StreetTag onClick={onClick} isSelected={isSelected} />;
};

export default memo(StreetTagContainer);