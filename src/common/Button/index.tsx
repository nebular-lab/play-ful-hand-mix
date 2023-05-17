import { Button } from '@chakra-ui/react';
import { FC } from 'react';
type Props = {
  label: string;
};
export const CustomButton: FC<Props> = (props) => {
  const { label } = props;
  return <Button>{label}</Button>;
};
