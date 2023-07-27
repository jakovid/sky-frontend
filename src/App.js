import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useContentsContext } from './hooks/useContentsContext';

// pages and components
import AdminTeachers from './pages/admin/Teachers';
import Admin from './pages/admin/Admin';
import AdminHome from './pages/admin/Home';
import LandingPageEng from './pages/public/LandingPageEng';
import AboutUsEng from './pages/public/AboutUsEng';
import OurTeamEng from './pages/public/OurTeamEng';
import OurClassesEng from './pages/public/OurClassesEng';
import ContactUsEng from './pages/public/ContactUsEng';

function App() {
  const { dispatch } = useContentsContext()
    

    useEffect(() => {
        const fetchContents = async() => {
            const response = await fetch('/api/content')
            const json = await response.json()

            if(response.ok) {
                dispatch({
                    type: 'SET_CONTENTS',
                    payload: json
                })
            }
        }

        fetchContents()
    }, [])

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
              path="/admin/home"
              element={<AdminHome />}
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
