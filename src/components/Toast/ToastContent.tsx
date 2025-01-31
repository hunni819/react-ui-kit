import { toastContentBaseCls } from '@consts/className';
import { CSSProperties, FC, useMemo } from 'react';
import { BaseToastProps } from './types';

interface ToastContentProps extends BaseToastProps {
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

const ToastContent: FC<ToastContentProps> = (props) => {
  const { children, position = 'bottom-right' } = props;

  const positionCss: CSSProperties = useMemo(() => {
    switch (position) {
      case 'bottom-left':
        return {
          position: 'absolute',
          bottom: '20px',
          left: '20px',
        };
      case 'bottom-right':
        return {
          position: 'absolute',
          bottom: '20px',
          right: '20px',
        };
      case 'top-left':
        return {
          position: 'absolute',
          top: 0,
          left: '20px',
        };
      case 'top-right':
        return {
          position: 'absolute',
          top: 0,
          right: '20px',
        };
    }
  }, [position]);

  return (
    <div style={{ ...positionCss }} className={toastContentBaseCls}>
      {children}
    </div>
  );
};

export default ToastContent;
