import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TeachersContextProvider } from './context/TeacherContext';
import { LanguageContextProvider } from './context/LanguageContext';
import { ContentsContextProvider } from './context/ContentContext';
import { WebImagesContextProvider } from './context/WebImageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TeachersContextProvider>
      <LanguageContextProvider>
        <ContentsContextProvider>
          <WebImagesContextProvider>
            <App />
          </WebImagesContextProvider>
        </ContentsContextProvider>
      </LanguageContextProvider>
    </TeachersContextProvider>
  </React.StrictMode>
);

