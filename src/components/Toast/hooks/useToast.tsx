import { useEffect, useRef } from 'react';
import ToastContent from '../ToastContent';
import ToastDescription from '../ToastDescription';
import ToastTitle from '../ToastTitle';
import { createRoot, Root } from 'react-dom/client';
import ToastClose from '../ToastClose';

interface UseToastProps {
  title: string;
  description: string;
  duration: number;
}

const useToast = () => {
  const timerId = useRef<NodeJS.Timeout>();
  const root = useRef<Root>();

  const handleClose = () => {
    if (root.current) root.current.unmount();
    if (timerId.current) clearTimeout(timerId.current);
  };

  const toast = ({ title, description, duration }: UseToastProps) => {
    if (root.current) root.current.unmount();
    root.current = createRoot(document.getElementById('ui-toaster')!);

    timerId.current = setTimeout(() => {
      if (root.current) root.current.unmount();
      if (timerId.current) clearTimeout(timerId.current);
    }, duration);

    return root.current.render(
      <ToastContent>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose onClick={handleClose} />
      </ToastContent>
    );
  };

  useEffect(() => {
    return () => {
      if (timerId.current) clearTimeout(timerId.current);
      if (root.current) root.current.unmount();
    };
  }, [timerId.current, root.current]);

  return { toast };
};

export default useToast;
