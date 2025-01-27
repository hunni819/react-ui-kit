import { createRoot } from 'react-dom/client';
import App from './App';
import { Toaster } from '@ui/Toast';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Toaster />
  </>
);
