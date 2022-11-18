import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
// import "bootswatch/dist/morph/bootstrap.min.css";
import { AuthContextProvider } from './utils/AuthContext';
import { SearchContextProvider } from './utils/SearchContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
