import { createContext, FC, useContext, useMemo } from 'react';
import ProgressIndicator from './ProgressIndicator';
import { progressBaseCls, progressIndicatorBaseCls } from '@consts/className';

interface ProgressProps {
  stop?: boolean;
  value?: number;
  className?: string;
}

type ProgressContextType = {
  value: number | undefined;
  stop: boolean | undefined;
};

const ProgressContext = createContext<ProgressContextType>({
  value: 0,
  stop: false,
});

export const useProgressContext = () => {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error('ProgressContext를 호출할 수 없는 범위입니다.');
  }
  return context;
};

const Progress: FC<ProgressProps> = (props) => {
  const { stop, value, className: classNameProps } = props;

  const progressIndicatorCls = useMemo(
    () =>
      classNameProps
        ? progressIndicatorBaseCls
        : `${progressIndicatorBaseCls} ${classNameProps}`,
    [classNameProps]
  );

  const progressContext = {
    value,
    stop,
  };

  return (
    <ProgressContext.Provider value={progressContext}>
      <div
        className={progressBaseCls}
        style={{
          position: 'relative',
          backgroundColor: 'oklch(0.968 0.007 247.896)',
          borderRadius: '10px',
          height: '10px',
        }}
      >
        <ProgressIndicator className={progressIndicatorCls} />
      </div>
    </ProgressContext.Provider>
  );
};

export default Progress;

// const [stop, setStop] = useState<boolean>(false);
// const getUserData = async () => {
//   setStop(false);
//   try {
//     setTimeout(async () => {
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/todos/1'
//       );
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         setStop(true);
//       }
//     }, 600000);
//   } catch (err) {
//     console.error(err);
//     setStop(true);
//   }
// };
// useEffect(() => {
//   getUserData();
// }, []);

// return <Progress className={''} value={100} stop={stop} />;
