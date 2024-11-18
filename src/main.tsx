import { StrictMode } from 'react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
  </StrictMode>
);
