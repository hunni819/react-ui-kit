import { toastDescBaseCls } from '@consts/className';
import { FC } from 'react';
import { BaseToastProps } from './types';

interface ToastDescriptionProps extends BaseToastProps {}

const ToastDescription: FC<ToastDescriptionProps> = (props) => {
  const { children } = props;

  return <div className={toastDescBaseCls}>{children}</div>;
};

export default ToastDescription;
