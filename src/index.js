import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TeachersContextProvider } from './context/TeacherContext';
import { LanguageContextProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TeachersContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </TeachersContextProvider>
  </React.StrictMode>
);

