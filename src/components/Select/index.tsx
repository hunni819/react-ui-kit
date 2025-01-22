import {
  Children,
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import Popover from '../Popover';
import SelectTrigger from './SelectTrigger';
import SelectContent from './SelectContent';
import SelectItem from './SelectItem';

interface SelectProps {
  children: ReactNode;
  className: string;
  onChange: (selectedValue: string) => void;
  value: string;
}

interface SelectCompound {
  Trigger: typeof SelectTrigger;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
}

interface SelectContextType {
  onChange: (selectedValue: string) => void;
  value: string;
}

const SelectContext = createContext<SelectContextType>({
  onChange: () => {},
  value: '',
});

export const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('context를 호출할 수 없는 범위입니다.');
  }
  return context;
};

const Select: FC<SelectProps> & SelectCompound = (props) => {
  const { children, onChange, value, className: classNameProps } = props;

  const selectContext = {
    onChange,
    value,
  };

  const selectElement = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );

  const trigger = useMemo(
    () => selectElement.find((child) => child.type === SelectTrigger),
    [selectElement]
  );
  const content = useMemo(
    () => selectElement.filter((child) => child.type === SelectContent),
    [selectElement]
  );

  const BaseCls = useMemo(
    () => (classNameProps ? '' : `${''} ${classNameProps}`),
    [classNameProps]
  );

  return (
    <SelectContext.Provider value={selectContext}>
      <div className={BaseCls}>
        <Popover>
          <Popover.Trigger>{trigger}</Popover.Trigger>
          <Popover.Content>{content}</Popover.Content>
        </Popover>
      </div>
    </SelectContext.Provider>
  );
};

Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Item = SelectItem;

export default Select;
