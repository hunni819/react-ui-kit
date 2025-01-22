import {
  Children,
  createContext,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useCallback,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';

import PopoverContent from './PopoverContent';
import PopoverTrigger from './PopoverTrigger';
import { createPortal } from 'react-dom';
import { popoverBaseCls } from '../../consts/className';

interface PopoverProps {
  children: ReactNode;
  position?: 'bottom-left' | 'bottom-center' | 'bottom-right';
  className?: string;
}

interface PopoverCompound {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
}

interface PopoverContextProps {
  position: string;
  triggerRef: HTMLButtonElement;
  handleTriggerRef: (refCurrent: HTMLButtonElement) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const PopoverContext = createContext<PopoverContextProps>({
  position: 'bottom-left',
  triggerRef: document.createElement('button'),
  handleTriggerRef: () => {},
  setIsOpen: () => {},
  isOpen: false,
});

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error('usePopoverContext 내에서 사용할 수 있습니다.');
  }
  return context;
};

const Popover: FC<PopoverProps> & PopoverCompound = (props) => {
  const {
    children,
    position = 'bottom-left',
    className: classNameProps,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [triggerRef, setTriggerRef] = useState<HTMLButtonElement>(
    document.createElement('button')
  );

  const handleTriggerRef = useCallback((refCurrent: HTMLButtonElement) => {
    setTriggerRef(refCurrent);
  }, []);

  const popoverItems = Children.toArray(children) as ReactElement[];
  const popoverTrigger = popoverItems.find(
    (child) => child.type === PopoverTrigger
  );

  const popoverContent = popoverItems.find(
    (child) => child.type === PopoverContent
  );

  const popoverContext = {
    isOpen,
    position,
    triggerRef,
    handleTriggerRef,
    setIsOpen,
  };

  const popoverCls = useMemo(() => {
    return classNameProps
      ? `${popoverBaseCls} ${classNameProps}`
      : `${popoverBaseCls}`;
  }, [classNameProps]);

  return (
    <PopoverContext.Provider value={popoverContext}>
      <div className={popoverCls}>
        {popoverTrigger}
        {isOpen && createPortal(popoverContent, document.body)}
      </div>
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
