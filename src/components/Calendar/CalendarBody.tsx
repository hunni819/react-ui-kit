import { useCallback, useMemo } from 'react';
import { useCalendarContext } from '.';
import { getFilteredDate } from './CalendarCurrent';
import {
  calendarBodyBaseCls,
  calendarBodyWrapCls,
} from '../../consts/className';

interface CalendarBodyProps {
  index?: number;
  className?: string;
}

const CalendarBody = (props: CalendarBodyProps) => {
  const { className: classNameProps } = props;
  const { value, onChange } = useCalendarContext();

  const [currentMonthstartDate, currentMonthLastDate] = useMemo(() => {
    return [
      new Date(value.getFullYear(), value.getMonth(), 1).getDay(),
      new Date(value.getFullYear(), value.getMonth() + 1, 0).getDay(),
    ];
  }, [value]);

  // 일요일로 시작해서 토요일로 끝나야함
  // 현재 달이 일요일로 시작하면 시작일을 현재 달의 1일로 한다.

  // 일요일로 시작해서 토요일로 끝나야함
  // 현재 달이 토요일로 끝나면 종료일을 현재 달의 마지막 날로 한다.

  const [startDate, endDate] = useMemo(() => {
    return [
      new Date(
        value.getFullYear(),
        value.getMonth(),
        1 - currentMonthstartDate
      ),
      new Date(
        value.getFullYear(),
        value.getMonth() + 1,
        6 - currentMonthLastDate
      ),
    ];
  }, [value]);

  const dates = useMemo(() => {
    const datesArr = [];

    let currentDate = new Date(startDate);

    // 1월 3일
    while (currentDate <= endDate) {
      const filteredDate = getFilteredDate();
      datesArr.push(filteredDate(currentDate, 'dates'));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return datesArr;
  }, [startDate, endDate]);

  const handleSelectedDate = useCallback(
    (selectedDate: string) => {
      onChange(new Date(selectedDate));
    },
    [onChange]
  );

  const calendarBodyCls = useMemo(() => {
    return classNameProps
      ? `${calendarBodyBaseCls} ${classNameProps}`
      : `${calendarBodyBaseCls}`;
  }, [classNameProps]);

  return (
    <div className={calendarBodyWrapCls}>
      {dates.map((date, index) => (
        <li
          className={calendarBodyCls}
          key={`date-${index}`}
          onClick={() => date !== undefined && handleSelectedDate(date)}
        >
          {date}
        </li>
      ))}
    </div>
  );
};

export default CalendarBody;
