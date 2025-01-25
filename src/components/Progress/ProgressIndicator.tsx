import { useCallback, useEffect, useRef, useState } from 'react';

interface ProgressProps {
  className?: string;
  stop?: boolean;
  value?: number | 0;
}

const fps = 1000 * 60;

const ProgressIndicator = (props: ProgressProps) => {
  const { className, stop, value } = props;
  const animateId = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(value || 0);
  let start = 0;
  let end = 0;

  const animationCallback = useCallback(
    (time: number) => {
      if (!start) start = time;

      end = time - start;
      console.log(start, end);

      if (stop) {
        setProgress(100);
        end = start;
      }
      setProgress((prev) => Math.min(prev + (end / fps) * 10, 100));
      animateId.current = requestAnimationFrame(animationCallback);
    },
    [stop, animateId.current]
  );

  useEffect(() => {
    if (stop) setProgress(100);
    if (!stop && progress < 100) {
      animateId.current = requestAnimationFrame(animationCallback);
    }
    if (!stop && progress === 100) setProgress(0);

    return () => {
      window.cancelAnimationFrame(animateId.current);
    };
  }, [stop, progress, animateId.current]);

  return (
    <>
      <div
        ref={progressBarRef}
        className={className}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '10px',
          width: `${progress}%`,
          display: stop ? 'none' : 'block',
          backgroundColor: 'oklch(0.269 0 0)',
        }}
      />
    </>
  );
};

export default ProgressIndicator;
