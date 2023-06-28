import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import { HashRouter, Route, Routes } from 'react-router-dom';
import EnglishHome from "./pages/EnglishHome";
import EnglishAboutUs from "./pages/EnglishAboutUs";
import EnglishOurTeam from "./pages/EnglishOurTeam";
import EnglishOurClasses from "./pages/EnglishOurClasses";
import EnglishContactUs from "./pages/EnglishContactUs";
import ChineseHome from "./pages/ChineseHome";
import ChineseAboutUs from "./pages/ChineseAboutUs";
import ChineseOurTeam from "./pages/ChineseOurTeam";
import ChineseOurClasses from "./pages/ChineseOurClasses";
import ChineseContactUs from "./pages/ChineseContactUs";
import "./App.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RouteSwitch />
  // </React.StrictMode>
  <HashRouter >
  <Routes>
      <Route path='/' element={<ChineseHome />} />
      <Route path='/about-us' element={<ChineseAboutUs />} />
      <Route path='/our-team' element={<ChineseOurTeam />} />
      <Route path='/our-classes' element={<ChineseOurClasses />} />
      <Route path="/contact-us" element={<ChineseContactUs />} />
      <Route path='/home/en' element={<EnglishHome />} />
      <Route path='/about-us/en' element={<EnglishAboutUs />} />
      <Route path='/our-team/en' element={<EnglishOurTeam />} />
      <Route path="/our-classes/en" element={<EnglishOurClasses />} />
      <Route path="/contact-us/en" element={<EnglishContactUs />} />
  </Routes>
  </HashRouter>

 
) ;

