import { FC, ReactNode, useMemo } from 'react';
import { useAccordionItemContext } from './AccordionItem';
import Arrow from '@ui/Icons/Arrow';
import { accordionTriggerBaseCls } from '@consts/className';

interface AccordianTriggerProps {
  children: ReactNode;
  className?: string;
}

const AccordianTrigger: FC<AccordianTriggerProps> = (props) => {
  const { children, className: classNameProps } = props;
  const { handleOpen, isOpen } = useAccordionItemContext();

  const transform = useMemo(() => {
    return isOpen
      ? {
          display: 'inline-block',
          transform: 'rotate(180deg)',
          transition: 'transform 0.3s ease-in-out',
        }
      : {
          display: 'inline-block',
          transform: 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out',
        };
  }, [isOpen]);

  const handleToggle = () => {
    handleOpen();
  };

  const accordionTriggerCls = useMemo(
    () =>
      classNameProps
        ? accordionTriggerBaseCls
        : `${accordionTriggerBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return (
    <div className={accordionTriggerCls} onClick={handleToggle}>
      {children}
      <span style={{ ...transform }}>{isOpen ? <Arrow /> : <Arrow />}</span>
    </div>
  );
};

export default AccordianTrigger;
