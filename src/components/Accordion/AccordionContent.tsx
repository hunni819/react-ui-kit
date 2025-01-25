import { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { useAccordionItemContext } from './AccordionItem';
import { accordionContentBaseCls } from '@consts/className';

interface AccordianContentProps {
  children: ReactNode;
  className?: string;
}

const AccordianContent: FC<AccordianContentProps> = (props) => {
  const { children, className: classNameProps } = props;
  const content = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const { isOpen } = useAccordionItemContext();

  const heightCss = useMemo(() => {
    return isOpen
      ? {
          height: `${contentHeight}px`,
          transition: 'height 0.3s ease-in-out',
        }
      : {
          height: `0px`,
          transition: 'height 0.3 ease-in-out',
        };
  }, [isOpen, contentHeight]);

  useEffect(() => {
    if (!content.current) {
      return;
    }
    setContentHeight(content.current.scrollHeight);
  }, [content.current]);

  const accordionContentCls = useMemo(
    () =>
      classNameProps
        ? accordionContentBaseCls
        : `${accordionContentBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return (
    <div ref={content} className={accordionContentCls} style={{ ...heightCss }}>
      {children}
    </div>
  );
};

export default AccordianContent;
