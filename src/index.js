import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TeachersContextProvider } from './context/TeacherContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TeachersContextProvider>
      <App />
    </TeachersContextProvider>
  </React.StrictMode>
);

