import Progress from '@ui/Progress';
import { useEffect, useState } from 'react';

const App = () => {
  const [stop, setStop] = useState<boolean>(false);
  const getUserData = async () => {
    setStop(false);
    try {
      setTimeout(async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1'
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setStop(true);
        }
      }, 600000);
    } catch (err) {
      console.error(err);
      setStop(true);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return <Progress className={''} value={20} stop={stop} />;
};

export default App;
