import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import { useModalContext } from '.';
import {
  modalTriggerBaseCls,
  modalTriggerWrapCls,
} from '../../consts/className';

interface ModalTriggerProps {
  children?: ReactNode;
  className: string;
}

const ModalTrigger = (props: ModalTriggerProps) => {
  const { className: classNameProps, children } = props;
  const { onOpenModal } = useModalContext();

  const handleTrigger = () => {
    onOpenModal();
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
    return children ? (
      triggerElement.map((child) =>
        cloneElement(child, {
          onClick: () => {
            handleTrigger();
          },
        })
      )
    ) : (
      <button className={modalTriggerCls} onClick={handleTrigger}>
        모달 열기
      </button>
    );
  }, [triggerElement, modalTriggerCls]);

  return <div className={modalTriggerWrapCls}>{trigger}</div>;
};

export default ModalTrigger;
