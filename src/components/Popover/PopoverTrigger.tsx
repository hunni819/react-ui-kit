import { useRef, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { usePopoverContext } from '.';
import {
  popoverTriggerBaseCls,
  popoverTriggerWrapCls,
} from '@consts/className';

interface PopoverTriggerProps {
  children: ReactNode;
  className?: string;
}

const PopoverTrigger = (props: PopoverTriggerProps) => {
  const { children, className: classNameProps } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { handleTriggerRef, setIsOpen } = usePopoverContext();

  const handleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const popoverTriggerCls = useMemo(() => {
    return classNameProps
      ? `${popoverTriggerBaseCls} ${classNameProps}`
      : `${classNameProps}`;
  }, [classNameProps]);

  useEffect(() => {
    if (!buttonRef.current) {
      return;
    }
    handleTriggerRef(buttonRef.current);
  }, []);

  return (
    <div className={popoverTriggerWrapCls}>
      <button
        className={popoverTriggerCls}
        onClick={handleIsOpen}
        ref={buttonRef}
      >
        {children}
      </button>
    </div>
  );
};

export default PopoverTrigger;
