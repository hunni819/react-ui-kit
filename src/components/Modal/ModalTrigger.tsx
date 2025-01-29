import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import { useModalContext } from '.';
import { modalTriggerBaseCls, modalTriggerWrapCls } from '@consts/className';

interface ModalTriggerProps {
  children?: ReactNode;
  className?: string;
}

const ModalTrigger = (props: ModalTriggerProps) => {
  const { className: classNameProps, children } = props;
  const { setIsOpen } = useModalContext();

  const handleTrigger = () => {
    setIsOpen(true);
  };

  const triggerElement = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );

  const modalTriggerCls = useMemo(() => {
    return classNameProps
      ? `${modalTriggerBaseCls} `
      : `${modalTriggerBaseCls} ${classNameProps}`;
  }, [classNameProps]);

  const trigger = useMemo(() => {
    return children === 'object' ? (
      triggerElement.map((child) =>
        cloneElement(child, {
          onClick: () => {
            handleTrigger();
          },
        })
      )
    ) : (
      <button className={modalTriggerCls} onClick={handleTrigger}>
        {children}
      </button>
    );
  }, [triggerElement, modalTriggerCls]);

  return <div className={modalTriggerWrapCls}>{trigger}</div>;
};

export default ModalTrigger;
