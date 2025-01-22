import Progress from '@ui/Progress';
import { useEffect, useState } from 'react';

function App() {
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
          setStop(true);
          console.log(data);
        }
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return <Progress stop={stop} />;
}

export default App;
