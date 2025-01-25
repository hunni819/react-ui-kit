import { FC, useMemo } from 'react';
import ProgressIndicator from './ProgressIndicator';
import { progressBaseCls, progressIndicatorBaseCls } from '@consts/className';

interface ProgressProps {
  stop?: boolean;
  value?: number;
  className?: string;
}

const Progress: FC<ProgressProps> = (props) => {
  const { stop, value, className: classNameProps } = props;

  const progressIndicatorCls = useMemo(
    () =>
      classNameProps
        ? progressIndicatorBaseCls
        : `${progressIndicatorBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  return (
    <div
      className={progressBaseCls}
      style={{
        position: 'relative',
        backgroundColor: 'oklch(0.968 0.007 247.896)',
        borderRadius: '10px',
        height: '10px',
      }}
    >
      <ProgressIndicator
        className={progressIndicatorCls}
        stop={stop}
        value={value}
      />
    </div>
  );
};

export default Progress;
