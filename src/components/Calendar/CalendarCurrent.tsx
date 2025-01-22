import { ReactNode, useMemo } from 'react';
import { dayArr, MonthArr, useCalendarContext } from '.';
import {
  calendarCurrentBaseCls,
  calendarCurrentWrapCls,
} from '@consts/className';

export const getFilteredDate = () => {
  const filteredDate = (rawDate: Date, options: 'dates' | 'current') => {
    const getDay = new Date(rawDate).getDay();
    const getDate = new Date(rawDate).getDate();
    const getMonth = new Date(rawDate).getMonth();
    const getYear = new Date(rawDate).getFullYear();

    const setDay = dayArr[getDay];
    const setMonth = MonthArr[getMonth];

    if (options === 'current') {
      return `${setDay} ${setMonth} ${getDate} ${getYear}`;
    }

    const fillZeroMonth = getMonth < 9 ? '0' + (getMonth + 1) : getMonth + 1;
    const fillZeroDate = getDate <= 9 ? '0' + getDate : getDate;

    if (options === 'dates') {
      return `${getYear}-${fillZeroMonth}-${fillZeroDate}`;
    }
  };

  return filteredDate;
};

interface CalendarCurrentProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const CalendarCurrent = (props: CalendarCurrentProps) => {
  const { className: classNameProps } = props;
  const { value } = useCalendarContext();
  const filteredDate = getFilteredDate();

  const calendarCurrentCls = useMemo(() => {
    return classNameProps
      ? `${calendarCurrentBaseCls} ${classNameProps}`
      : `${calendarCurrentBaseCls}`;
  }, []);

  return (
    <div className={calendarCurrentWrapCls}>
      <p className={calendarCurrentCls}>{filteredDate(value, 'current')}</p>
    </div>
  );
};

export default CalendarCurrent;
