import {
  Children,
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';
import { createPortal } from 'react-dom';
import ModalClose from './ModalClose';
import { modalBaseCls } from '../../consts/className';

interface ModalProps {
  children: ReactNode;
  className: string;
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
}

interface ModalCompound {
  Backdrop: typeof ModalBackdrop;
  Trigger: typeof ModalTrigger;
  Close: typeof ModalClose;
  Content: typeof ModalContent;
}

interface ModalContextType {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
}

const ModalContext = createContext<ModalContextType>({
  onCloseModal: () => {},
  onOpenModal: () => {},
  open: false,
});

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext의 범위 내에서 사용할 수 있습니다.');
  }
  return context;
};

const Modal: FC<ModalProps> & ModalCompound = (props) => {
  const {
    children,
    className: classNameProps,
    onCloseModal,
    onOpenModal,
    open,
  } = props;

  const modalElement = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );

  const trigger = useMemo(
    () => modalElement.find((child) => child.type === ModalTrigger),
    [modalElement]
  );

  const backdrop = useMemo(
    () => modalElement.find((child) => child.type === ModalBackdrop),
    [modalElement]
  );
  const content = useMemo(
    () => modalElement.find((child) => child.type === ModalContent),
    [modalElement]
  );

  const modalContext = {
    onCloseModal,
    onOpenModal,
    open,
  };

  const modalCls = useMemo(() => {
    return classNameProps
      ? `${modalBaseCls} `
      : `${modalBaseCls} ${classNameProps}`;
  }, [classNameProps]);

  return (
    <ModalContext.Provider value={modalContext}>
      <div className={modalCls}>
        {trigger}
        {open && createPortal(backdrop, document.body)}
        {open && createPortal(content, document.body)}
      </div>
    </ModalContext.Provider>
  );
};

Modal.Backdrop = ModalBackdrop;
Modal.Trigger = ModalTrigger;
Modal.Close = ModalClose;
Modal.Content = ModalContent;

export default Modal;
