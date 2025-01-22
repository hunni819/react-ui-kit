import { useState } from 'react';
import Calendar from '../Calendar';
import Popover from '../Popover';

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
