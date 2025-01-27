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
