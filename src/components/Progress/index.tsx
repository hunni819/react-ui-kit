import { useEffect, useRef, useState } from 'react';

/**
 * 1. api 호출 완료 시에 width 100%를 찍고 다시 0%
 * 2. 한번 로딩 전에 api 호출이 완료될 경우 강제로 100%로 찍고 0%
 */

interface ProgressProps {
  stop: boolean;
}

const Progress = (props: ProgressProps) => {
  const { stop } = props;
  const [progress, setProgress] = useState(0);
  const animateId = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const animationCallback = () => {
    if (stop) {
      setProgress(100);
      return;
    }

    setProgress((prev) => Math.min(prev + 1000 / 144, 100));
    animateId.current = requestAnimationFrame(animationCallback);
  };

  useEffect(() => {
    if (stop) {
      setProgress(100);
    } else if (progress < 100) {
      animateId.current = requestAnimationFrame(animationCallback);
    } else if (progress === 100) {
      setProgress(0);
    }

    return () => {
      window.cancelAnimationFrame(animateId.current);
    };
  }, [stop, progress]);

  return (
    <>
      <div
        ref={progressBarRef}
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: 'gray',
          display: stop ? 'none' : 'block',
        }}
      />
    </>
  );
};

export default Progress;
