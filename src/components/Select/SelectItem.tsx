import { ReactNode, useMemo } from 'react';
import { useSelectContext } from '.';

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

  const BaseCls = useMemo(
    () => (classNameProps ? '' : `${''} ${classNameProps}`),
    [classNameProps]
  );

  return (
    <div className={BaseCls} onClick={() => handleClickOptions(value)}>
      {children}
    </div>
  );
};

export default SelectItem;
