import { FC, ReactNode, useMemo } from 'react';
import AccordionItem from './AccordionItem';
import AccordionTrigger from './AccordionTrigger';
import AccordionContent from './AccordionContent';
import { accordionBaseCls } from '@consts/className';

interface AccordionCompound {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

const Accordion: FC<AccordionProps> & AccordionCompound = (props) => {
  const { children, className: classNameProps } = props;

  const accordionCls = useMemo(
    () =>
      classNameProps
        ? accordionBaseCls
        : `${accordionBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return <div className={accordionCls}>{children}</div>;
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
