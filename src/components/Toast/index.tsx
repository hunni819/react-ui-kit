import { FC, useMemo } from 'react';
import useToast from './hooks/useToast';
import { toasterBaseCls } from '@consts/className';

interface ToasterProps {
  className?: string;
}

const Toaster: FC<ToasterProps> = (props) => {
  const { className: classNameProps } = props;

  const toasterCls = useMemo(
    () =>
      classNameProps
        ? `${toasterBaseCls}`
        : `${toasterBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return <div id={'ui-toaster'} className={toasterCls} />;
};

export { useToast, Toaster };
