import { useEffect, useRef, useState } from 'react';

interface ProgressProps {
  stop: boolean;
}

const Progress = (props: ProgressProps) => {
  const { stop } = props;
  const [progress, setProgress] = useState(0);
  const animateId = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const animationCallback = (time: number) => {
    setProgress((prev) => Math.min(prev + time / 1000 / 144, 100)); // 단위 프레임당 시간
    animateId.current = requestAnimationFrame(animationCallback);
  };

  useEffect(() => {
    animateId.current = requestAnimationFrame(animationCallback);

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
        }}
      />
    </>
  );
};

export default Progress;
