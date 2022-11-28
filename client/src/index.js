import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { AuthContextProvider } from './utils/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
        <App /> 
    </AuthContextProvider>
  </React.StrictMode>
);
