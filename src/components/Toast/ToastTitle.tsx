import { toastTitleBaseCls } from '@consts/className';
import { FC } from 'react';
import { BaseToastProps } from './types';

interface ToastTitleProps extends BaseToastProps {}

const ToastTitle: FC<ToastTitleProps> = (props) => {
  const { children } = props;

  return <div className={toastTitleBaseCls}>{children}</div>;
};

export default ToastTitle;
