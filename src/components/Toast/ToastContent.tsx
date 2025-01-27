import { toastContentBaseCls } from '@consts/className';
import { FC, ReactNode, useMemo } from 'react';

interface ToastContentProps {
  className?: string;
  children: ReactNode;
}

const ToastContent: FC<ToastContentProps> = (props) => {
  const { children, className: classNameProps } = props;

  const toastContentCls = useMemo(
    () =>
      classNameProps
        ? `${toastContentBaseCls}`
        : `${toastContentBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return <div className={toastContentCls}>{children}</div>;
};

export default ToastContent;
