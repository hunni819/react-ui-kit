import { toastDescBaseCls } from '@consts/className';
import { FC, ReactNode, useMemo } from 'react';

interface ToastDescriptionProps {
  className?: string;
  children: ReactNode;
}

const ToastDescription: FC<ToastDescriptionProps> = (props) => {
  const { children, className: classNameProps } = props;

  const toastDescCls = useMemo(
    () =>
      classNameProps
        ? toastDescBaseCls
        : `${toastDescBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return <div className={toastDescCls}>{children}</div>;
};

export default ToastDescription;
