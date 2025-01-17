import { useCalendarContext } from '.';
import { useCallback, useMemo } from 'react';
import { BaseProps } from '../../types/ChildProps';
import {
  calendarNavigatorBaseCls,
  calendarNavigatorWrapCls,
} from '../../consts/className';

interface CalendarNavigatorProps extends BaseProps {
  className?: string;
}

const CalendarNavigator = (props: CalendarNavigatorProps) => {
  const { className: classNameProps } = props;
  const { onChange, value } = useCalendarContext();

  const handlePrevDate = useCallback(() => {
    const newDate = new Date(value.setMonth(value.getMonth() - 1));
    onChange(newDate);
  }, [onChange, value]);

  const handleNextDate = useCallback(() => {
    const newDate = new Date(value.setMonth(value.getMonth() + 1));
    onChange(newDate);
  }, [onChange, value]);

  const calendarNavigatorCls = useMemo(() => {
    return classNameProps
      ? `${calendarNavigatorBaseCls} ${classNameProps}`
      : `${calendarNavigatorBaseCls}`;
  }, []);

  return (
    <div className={calendarNavigatorWrapCls}>
      <button className={calendarNavigatorCls} onClick={handlePrevDate}>
        prev
      </button>
      <button className={calendarNavigatorCls} onClick={handleNextDate}>
        next
      </button>
    </div>
  );
};

export default CalendarNavigator;
