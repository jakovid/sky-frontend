import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import AdminTeachers from './pages/admin/Teachers';
import Admin from './pages/admin/Admin';
import LandingPageEng from './pages/english/LandingPageEng';
import AboutUsEng from './pages/english/AboutUsEng';
import OurTeamEng from './pages/english/OurTeamEng';
import OurClassesEng from './pages/english/OurClassesEng';
import ContactUsEng from './pages/english/ContactUsEng';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<LandingPageEng />}
            />
            <Route
              path="/about-us"
              element={<AboutUsEng />}
            />
            <Route
              path="/our-team"
              element={<OurTeamEng />}
            />
            <Route
              path="/our-classes"
              element={<OurClassesEng />}
            />
            <Route
              path="/contact-us"
              element={<ContactUsEng />}
            />
            <Route
              path="/admin"
              element={<Admin />}
            />
            <Route 
              path="/admin/teachers"
              element={<AdminTeachers />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
