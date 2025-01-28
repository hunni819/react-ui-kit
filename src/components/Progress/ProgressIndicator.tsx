import { useCallback, useEffect, useRef, useState } from 'react';

interface ProgressProps {
  className?: string;
  stop?: boolean;
  value?: number;
}

const ProgressIndicator = (props: ProgressProps) => {
  const { className, stop, value } = props;
  const animateId = useRef<number>(0);
  const startTime = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(value || 0);

  const animationCallback = useCallback(
    (time: number) => {
      if (!startTime.current) startTime.current = time;
      if (stop) setProgress(100);

      const elapsedTime = time - startTime.current;

      if (elapsedTime >= 1000) {
        setProgress((prev) => Math.min(prev + 10, 100));
        startTime.current = time;
      }

      animateId.current = requestAnimationFrame(animationCallback);
      if (progress === 100) setProgress(0);
    },

    [animateId.current]
  );

  useEffect(() => {
    if (stop) setProgress(100);
    if (!stop && progress <= 100)
      animateId.current = requestAnimationFrame(animationCallback);
    if (!stop && progress > 100) setProgress(0);

    return () => {
      if (animateId.current) window.cancelAnimationFrame(animateId.current);
    };
  }, [animateId.current]);

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

/** 화면 주사율 구하기 (fps 60)
 * (time: number) => {
      if (!startTime.current) startTime.current = time;

      if (stop) {
        setProgress(100);
      }

      const elapsedTime = time - startTime.current;

      if (Math.floor(elapsedTime) <= 1000) {
        console.log('경과 시간(ms)', elapsedTime);
        console.log('프레임 수', frameCount.current);
      }

      // setProgress((prev) => Math.min(prev + elapsedTime, 100));
      animateId.current = requestAnimationFrame(animationCallback);
      frameCount.current++;
    },
    [stop, animateId.current, frameCount.current, startTime.current]
 */
