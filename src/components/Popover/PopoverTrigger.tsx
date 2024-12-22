import { useRef, useEffect, useCallback, useMemo } from 'react';
import { BaseProps } from '../../types/ChildProps';
import { usePopoverContext } from '.';
import {
  popoverTriggerBaseCls,
  popoverTriggerWrapCls,
} from '../../consts/className';

interface PopoverTriggerProps extends BaseProps {
  className?: string;
}

const PopoverTrigger = (props: PopoverTriggerProps) => {
  const { children, className: classNameProps } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { handleTriggerRef, setIsOpen } = usePopoverContext();

  const handleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!buttonRef.current) {
      return;
    }
    handleTriggerRef(buttonRef.current);
  }, []);

  const popoverTriggerCls = useMemo(() => {
    return classNameProps
      ? `${popoverTriggerBaseCls} ${classNameProps}`
      : `${classNameProps}`;
  }, [classNameProps]);

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
