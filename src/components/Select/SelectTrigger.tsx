import { useMemo } from 'react';
import { useSelectContext } from '.';

interface SelectTriggerProps {
  className: string;
}

const SelectTrigger = (props: SelectTriggerProps) => {
  const { className: classNameProps } = props;

  const { value } = useSelectContext();

  const BaseCls = useMemo(
    () => (classNameProps ? '' : `${''} ${classNameProps}`),
    [classNameProps]
  );

  return (
    <div className={BaseCls}>{value ? value : '옵션을 선택해주세요.'}</div>
  );
};

export default SelectTrigger;
