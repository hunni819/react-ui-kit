import { useMemo, useEffect, useRef } from 'react';
import { usePopoverContext } from '.';
import { BaseProps } from '../../types/ChildProps';
import {
  popoverContentBaseCls,
  popoverContentWrapCls,
} from '../../consts/className';

interface PopoverContentProps extends BaseProps {
  className?: string;
}

const PopoverContent = (props: PopoverContentProps) => {
  const { children, className: classNameProps } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const { position, triggerRef, setIsOpen, isOpen } = usePopoverContext();

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      isOpen &&
      !triggerRef.contains(e.target as Node) &&
      contentRef.current &&
      !contentRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const location = useMemo(() => {
    const triggerDomRect = triggerRef.getBoundingClientRect();

    if (!triggerDomRect) {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    }

    switch (position) {
      case 'bottom-left':
        return {
          top: triggerDomRect.y + triggerDomRect.height,
          left: triggerDomRect.x,
        };
      case 'bottom-center':
        return {
          top: triggerDomRect.y + triggerDomRect.height,
          left: triggerDomRect.x + triggerDomRect.width / 2,
        };
      case 'bottom-right':
        return {
          top: triggerDomRect.y + triggerDomRect.height,
          left: triggerDomRect.x + triggerDomRect.width,
        };
      default:
        return {
          top: triggerDomRect.y + triggerDomRect.height,
          left: triggerDomRect.x,
        };
    }
  }, [triggerRef]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const popoverContentCls = useMemo(() => {
    return classNameProps
      ? `${popoverContentBaseCls} ${classNameProps}`
      : `${classNameProps}`;
  }, [classNameProps]);

  return (
    <div className={popoverContentWrapCls}>
      <div
        className={popoverContentCls}
        ref={contentRef}
        style={{ position: 'absolute', ...location }}
      >
        {children}
      </div>
    </div>
  );
};

export default PopoverContent;
