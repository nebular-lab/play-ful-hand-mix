import { useRef } from 'react';
import EditPage from '.';

const EditPageContainer = () => {
  const isMouseDownRef = useRef(false);
  const onMouseDown = () => {
    isMouseDownRef.current = true;
  };
  const onMouseUp = () => {
    isMouseDownRef.current = false;
  };
  return (
    <EditPage isMouseDownRef={isMouseDownRef} onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
  );
};
export default EditPageContainer;