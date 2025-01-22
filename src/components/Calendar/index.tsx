import { createContext, useContext, FC, useMemo, ReactNode } from 'react';

import CalendarCurrent from './CalendarCurrent';
import CalendarNavigator from './CalendarNavigator';
import CalendarBody from './CalendarBody';
import { calendarBaseCls } from '../../consts/className';

export const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const MonthArr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

interface CalendarCompoundProps {
  Current: typeof CalendarCurrent;
  Navigator: typeof CalendarNavigator;
  Body: typeof CalendarBody;
}

interface CalendarProps {
  children: ReactNode;
  onChange: (date: Date) => void;
  value: Date;
  className?: string;
}

interface CalendarContextProps {
  onChange: (date: Date) => void;
  value: Date;
}

const CalendarContext = createContext<CalendarContextProps>({
  onChange: () => {},
  value: new Date(),
});

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);

  if (!context) {
    throw Error('useCalendarContext는 CalendarProvider안에서 사용해야 합니다.');
  }
  return context;
};

const Calendar: FC<CalendarProps> & CalendarCompoundProps = (props) => {
  const { children, className: classNameProps, onChange, value } = props;

  console.log(value);

  const calendarContext = {
    onChange,
    value,
  };

  const calendarCls = useMemo(() => {
    return classNameProps
      ? `${calendarBaseCls} ${classNameProps}`
      : `${calendarBaseCls}`;
  }, []);

  return (
    <CalendarContext.Provider value={calendarContext}>
      <div className={calendarCls}>{children}</div>
    </CalendarContext.Provider>
  );
};

Calendar.Current = CalendarCurrent;
Calendar.Navigator = CalendarNavigator;
Calendar.Body = CalendarBody;

export default Calendar;
