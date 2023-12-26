import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { worker } from './mocks/browser';

worker.start({
  onUnhandledRequest: 'bypass',
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
