import { useToast } from '@ui/Toast';

const App = () => {
  const { toast } = useToast();

  const handleClickOpenToast = () => {
    toast({
      title: 'ToastTitle',
      description: 'ToastDescription',
      duration: 3000,
    });
  };

  return (
    <>
      <button onClick={handleClickOpenToast}>Open Toast</button>
    </>
  );
};

export default App;
