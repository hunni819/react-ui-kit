import { toastTitleBaseCls } from '@consts/className';
import { FC, ReactNode, useMemo } from 'react';

interface ToastTitleProps {
  className?: string;
  children: ReactNode;
}

const ToastTitle: FC<ToastTitleProps> = (props) => {
  const { children, className: classNameProps } = props;

  const toastTitleCls = useMemo(
    () =>
      classNameProps
        ? toastTitleBaseCls
        : `${toastTitleBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return <div className={toastTitleCls}>{children}</div>;
};

export default ToastTitle;
