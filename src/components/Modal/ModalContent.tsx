import { Children, ReactElement, ReactNode, useMemo } from 'react';
import ModalClose from './ModalClose';
import { modalContentBaseCls } from '@consts/className';

interface ModalContentProps {
  children: ReactNode;
  className: string;
}

const position = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
};

const ModalContent = (props: ModalContentProps) => {
  const { children, className: classNameProps } = props;

  const contentElement = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );

  const close = useMemo(
    () => contentElement.find((child) => child.type === ModalClose),
    [contentElement]
  );

  const content = useMemo(
    () => contentElement.filter((child) => child.type !== ModalClose),
    [contentElement]
  );

  const modalContentCls = useMemo(() => {
    return classNameProps
      ? `${modalContentBaseCls} `
      : `${modalContentBaseCls} ${classNameProps}`;
  }, [classNameProps]);

  return (
    <div
      className={modalContentCls}
      style={{ position: 'absolute', ...position }}
    >
      {close}
      {...content}
    </div>
  );
};

export default ModalContent;
