import { useEffect, useMemo, useRef } from 'react';
import { useModalContext } from '.';
import { modalBackdropBaseCls } from '@consts/className';

interface ModalBackdropProps {
  className?: string;
}

const position = {
  inset: 0,
  zIndex: 9998,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
};

const ModalBackdrop = (props: ModalBackdropProps) => {
  const { className: classNameProps } = props;
  const backdropRef = useRef<HTMLDivElement>(null);
  const { setIsOpen } = useModalContext();

  const handleBackdrop = (e: MouseEvent) => {
    if (backdropRef.current) {
      if (backdropRef.current.contains(e.target as Node)) setIsOpen(false);
    }
  };

  const modalBackdropCls = useMemo(() => {
    return classNameProps
      ? `${modalBackdropBaseCls} `
      : `${modalBackdropBaseCls} ${classNameProps}`;
  }, [classNameProps]);

  useEffect(() => {
    window.addEventListener('click', handleBackdrop);

    return () => {
      window.removeEventListener('click', handleBackdrop);
    };
  }, []);

  return (
    <div
      ref={backdropRef}
      className={modalBackdropCls}
      style={{ position: 'absolute', ...position }}
    />
  );
};

export default ModalBackdrop;
