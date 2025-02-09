import Calendar from '@ui/Calendar';
import Popover from '@ui/Popover';
import { useState } from 'react';

interface DatePickerProps {
  date: Date;
  onChangeDate: (date: Date) => void;
}

const DatePicker = (props: DatePickerProps) => {
  const { date: dateProp, onChangeDate } = props;
  const [date, setDate] = useState<Date>(dateProp);

  const handleChangeDate = (date: Date) => {
    setDate(date);
    onChangeDate(date);
  };

  return (
    <>
      <Popover>
        <Popover.Trigger>{date.toLocaleDateString()}</Popover.Trigger>
        <Popover.Content>
          <Calendar value={date} onChange={handleChangeDate}>
            <Calendar.Navigator />
            <Calendar.Body />
          </Calendar>
        </Popover.Content>
      </Popover>
    </>
  );
};

export default DatePicker;
