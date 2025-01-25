import {
  Children,
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import AccordianTrigger from './AccordionTrigger';
import AccordianContent from './AccordionContent';
import { accordionItemBaseCls } from '@consts/className';

interface AccordionItemProps {
  children: ReactNode;
  className?: string;
}

interface AccordionItemContextType {
  handleOpen: () => void;
  isOpen: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextType>({
  handleOpen: () => {},
  isOpen: false,
});

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error('AccordionItemContext를 호출할 수 없는 범위입니다.');
  }
  return context;
};

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const { children, className: classNameProps } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const itemElement = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );

  const trigger = useMemo(
    () => itemElement.find((child) => child.type === AccordianTrigger),
    [itemElement]
  );

  const content = useMemo(
    () => itemElement.find((child) => child.type === AccordianContent),
    [itemElement]
  );

  const accordionItemContext = {
    handleOpen,
    isOpen,
  };

  const accordionItemCls = useMemo(
    () =>
      classNameProps
        ? accordionItemBaseCls
        : `${accordionItemBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return (
    <AccordionItemContext.Provider value={accordionItemContext}>
      <div className={accordionItemCls}>
        {trigger}
        {isOpen && content}
      </div>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
