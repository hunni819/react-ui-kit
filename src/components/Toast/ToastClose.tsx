import { toastCloseBaseCls } from '@consts/className';
import { FC, useMemo } from 'react';

interface ToastCloseProps {
  className?: string;
  onClick: () => void;
}

const ToastClose: FC<ToastCloseProps> = (props) => {
  const { className: classNameProps, onClick } = props;

  const handleClose = () => {
    onClick();
  };

  const toasterCloseCls = useMemo(
    () =>
      classNameProps
        ? `${toastCloseBaseCls}`
        : `${toastCloseBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return (
    <button className={toasterCloseCls} onClick={handleClose}>
      Close
    </button>
  );
};

export default ToastClose;
