import { selectContentBaseCls } from '@consts/className';
import { ReactNode, useMemo } from 'react';

interface SelectContentProps {
  children: ReactNode;
  className: string;
}

const SelectContent = (props: SelectContentProps) => {
  const { children, className: classNameProps } = props;

  const SelectContentCls = useMemo(
    () =>
      classNameProps
        ? selectContentBaseCls
        : `${selectContentBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return <div className={SelectContentCls}>{children}</div>;
};

export default SelectContent;
