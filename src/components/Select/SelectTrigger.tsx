import { useMemo } from 'react';
import { useSelectContext } from '.';
import { selectTriggerBaseCls } from '@consts/className';

interface SelectTriggerProps {
  className: string;
}

const SelectTrigger = (props: SelectTriggerProps) => {
  const { className: classNameProps } = props;

  const { value } = useSelectContext();

  const selectTriggerCls = useMemo(
    () =>
      classNameProps
        ? selectTriggerBaseCls
        : `${selectTriggerBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return (
    <div className={selectTriggerCls}>
      {value ? value : '옵션을 선택해주세요.'}
    </div>
  );
};

export default SelectTrigger;
