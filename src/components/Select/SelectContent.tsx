import { ReactNode, useMemo } from 'react';

interface SelectContentProps {
  children: ReactNode;
  className: string;
}

const SelectContent = (props: SelectContentProps) => {
  const { children, className: classNameProps } = props;

  const BaseCls = useMemo(
    () => (classNameProps ? '' : `${''} ${classNameProps}`),
    [classNameProps]
  );

  return <div className={BaseCls}>{children}</div>;
};

export default SelectContent;
