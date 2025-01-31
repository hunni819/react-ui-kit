import { toastCloseBaseCls } from '@consts/className';
import { Children, cloneElement, FC, ReactElement, useMemo } from 'react';
import { BaseToastProps } from './types';

interface ToastCloseProps extends BaseToastProps {
  onClick: () => void;
}

const ToastClose: FC<ToastCloseProps> = (props) => {
  const { children, onClick } = props;

  const handleClose = () => {
    onClick();
  };

  const closeElement = Children.toArray(children) as ReactElement[];

  const close = useMemo(() => {
    return children === 'object' ? (
      closeElement.map((child) =>
        cloneElement(child, {
          onClick: () => {
            handleClose();
          },
        })
      )
    ) : (
      <button className={toastCloseBaseCls} onClick={handleClose}>
        {children}
      </button>
    );
  }, [closeElement, toastCloseBaseCls]);

  return close;
};

export default ToastClose;
