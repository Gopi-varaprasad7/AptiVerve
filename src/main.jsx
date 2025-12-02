import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import '@fontsource/inter';
import { AdminProvider } from './context/adminContext.jsx';
import { UserProvider } from './context/userContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AdminProvider>
  </StrictMode>
);
