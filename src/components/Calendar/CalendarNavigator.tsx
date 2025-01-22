import {
  calendarNavigatorBaseCls,
  calendarNavigatorWrapCls,
} from '@consts/className';
import { useCalendarContext } from '.';
import { useCallback, useMemo } from 'react';

interface CalendarNavigatorProps {
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
