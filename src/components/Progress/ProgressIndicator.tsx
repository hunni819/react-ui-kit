import { useCallback, useEffect, useRef, useState } from 'react';

interface ProgressProps {
  className?: string;
  stop?: boolean;
  value?: number | 0;
}

const fps = 1000 * 4;

const ProgressIndicator = (props: ProgressProps) => {
  const { className, stop, value } = props;
  const animateId = useRef<number>(0);
  const endTime = useRef<number>(0);
  const frameCount = useRef<number>(16.6);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(value || 0);

  const animationCallback = useCallback(
    (time: number) => {
      frameCount.current += 16.6;

      if (stop) {
        setProgress(100);
      }

      if (Math.floor(frameCount.current) >= fps) {
        frameCount.current = 0;
        endTime.current = time;
      }

      const elapsedTime = time - endTime.current;
      setProgress((prev) => Math.min(prev + (elapsedTime / fps) * 0.5, 100));
      animateId.current = requestAnimationFrame(animationCallback);
    },
    [stop, animateId.current, frameCount.current, endTime.current]
  );

  useEffect(() => {
    if (stop) setProgress(100);
    if (!stop && progress < 100) {
      animateId.current = requestAnimationFrame(animationCallback);
    }
    if (!stop && progress >= 100) setProgress(0);

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
