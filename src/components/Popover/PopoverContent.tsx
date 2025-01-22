import {
  useMemo,
  useEffect,
  useRef,
  useCallback,
  useState,
  ReactNode,
} from 'react';
import { usePopoverContext } from '.';
import { popoverContentBaseCls } from '@consts/className';

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
}

const PopoverContent = (props: PopoverContentProps) => {
  const { children, className: classNameProps } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const { position, triggerRef, setIsOpen, isOpen } = usePopoverContext();
  const [location, setLocation] = useState({});

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

  const handleTriggerRefRect = useCallback(() => {
    const locating = () => {
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
    };

    setLocation(locating());
  }, [triggerRef, position]);

  useEffect(() => {
    handleTriggerRefRect();

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('resize', () => handleTriggerRefRect());
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('resize', () => handleTriggerRefRect());
    };
  }, []);

  const popoverContentCls = useMemo(() => {
    return classNameProps
      ? `${popoverContentBaseCls} ${classNameProps}`
      : `${classNameProps}`;
  }, [classNameProps]);

  return (
    <div
      className={popoverContentCls}
      ref={contentRef}
      style={{ position: 'absolute', ...location }}
    >
      {children}
    </div>
  );
};

export default PopoverContent;
