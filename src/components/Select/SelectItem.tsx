import { ReactNode, useMemo } from 'react';
import { useSelectContext } from '.';
import { selectItemBaseCls } from '@consts/className';

interface SelectItemProps {
  children: ReactNode;
  className: string;
  value: string;
}

const SelectItem = (props: SelectItemProps) => {
  const { children, value, className: classNameProps } = props;
  const { onChange } = useSelectContext();

  const handleClickOptions = (value: string) => {
    onChange(value);
  };

  const selectItemCls = useMemo(
    () =>
      classNameProps
        ? selectItemBaseCls
        : `${selectItemBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return (
    <div className={selectItemCls} onClick={() => handleClickOptions(value)}>
      {children}
    </div>
  );
};

export default SelectItem;
