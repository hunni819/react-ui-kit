import { useEffect, useRef } from 'react';
import ToastContent from '../ToastContent';
import ToastDescription from '../ToastDescription';
import ToastTitle from '../ToastTitle';
import { createRoot, Root } from 'react-dom/client';
import ToastClose from '../ToastClose';

interface UseToastProps {
  title: string;
  description: string;
  duration?: number;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

const clear = (
  rootCurrent: Root | undefined,
  idCurrent: NodeJS.Timeout | undefined
) => {
  if (rootCurrent) rootCurrent.unmount();
  if (idCurrent) clearTimeout(idCurrent);
};

const useToast = () => {
  const timerId = useRef<NodeJS.Timeout>();
  const root = useRef<Root>();

  const handleClose = () => {
    clear(root.current, timerId.current);
  };

  const toast = ({ title, description, duration = 10000 }: UseToastProps) => {
    clear(root.current, timerId.current);
    root.current = createRoot(document.getElementById('ui-toaster')!);

    timerId.current = setTimeout(() => {
      clear(root.current, timerId.current);
    }, duration);

    return root.current.render(
      <ToastContent position={'bottom-left'}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose onClick={handleClose}>close</ToastClose>
      </ToastContent>
    );
  };

  useEffect(() => {
    return () => {
      clear(root.current, timerId.current);
    };
  }, [timerId.current, root.current]);

  return { toast };
};

export default useToast;
