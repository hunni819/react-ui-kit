import { useEffect, useRef, useState } from 'react';

interface ProgressProps {
  stop: boolean;
}

const Progress = (props: ProgressProps) => {
  const { stop } = props;
  const animateId = useRef<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const animationCallback = (time: number) => {
    console.log(time);
    if (stop) {
      window.cancelAnimationFrame(animateId.current);
      return;
    }

    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}`;
      setProgress((prev) => prev++);
    }

    animateId.current = window.requestAnimationFrame(animationCallback);
  };

  useEffect(() => {
    console.log(progressBarRef.current);
    return () => {
      window.cancelAnimationFrame(animateId.current);
    };
  }, [progress]);

  return (
    <>
      <div ref={progressBarRef} style={{ width: 0, height: '1px' }}></div>
    </>
  );
};

export default Progress;
