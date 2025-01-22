import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import { useModalContext } from '.';
import { modalCloseBaseCls, modalCloseWrapCls } from '../../consts/className';

interface ModalCloseProps {
  children?: ReactNode;
  className: string;
}

const ModalClose = (props: ModalCloseProps) => {
  const { className: classNameProps, children } = props;
  const { onCloseModal } = useModalContext();

  const handleClose = () => {
    onCloseModal();
  };

  const closeElement = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );

  const modalCloseCls = useMemo(() => {
    return classNameProps
      ? `${modalCloseBaseCls} `
      : `${modalCloseBaseCls} ${classNameProps}`;
  }, [classNameProps]);

  const close = useMemo(() => {
    return children ? (
      closeElement.map((child) =>
        cloneElement(child, {
          onClick: () => {
            handleClose();
          },
        })
      )
    ) : (
      <button className={modalCloseCls} onClick={handleClose}>
        모달 닫기
      </button>
    );
  }, [closeElement, modalCloseCls]);

  return <div className={modalCloseWrapCls}>{close}</div>;
};

export default ModalClose;
