import { memo } from 'react';

import StreetTag from '.';

type Props = {
  onClick: () => void;
  isSelected: boolean;
};
const StreetTagContainer = (props: Props) => {
  const { onClick, isSelected } = props;
  return <StreetTag onClick={onClick} isSelected={isSelected} />;
};

export default memo(StreetTagContainer);
