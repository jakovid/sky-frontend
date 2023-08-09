import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useContentsContext } from './hooks/useContentsContext';
import { useWebImagesContext } from './hooks/useWebImagesContext';

// pages and components
import AdminTeachers from './pages/admin/Teachers';
import Admin from './pages/admin/Admin';
import AdminHome from './pages/admin/Home';
import AdminAboutUs from './pages/admin/AboutUs';
import AdminOurTeam from './pages/admin/OurTeam';
import AdminOurClasses from './pages/admin/OurClasses';
import AdminContactUs from './pages/admin/ContactUs';
import LandingPageEng from './pages/public/LandingPageEng';
import AboutUsEng from './pages/public/AboutUsEng';
import OurTeamEng from './pages/public/OurTeamEng';
import OurClassesEng from './pages/public/OurClassesEng';
import ContactUsEng from './pages/public/ContactUsEng';

function App() {
  const { dispatch: contentsDispatch } = useContentsContext();
  const{ dispatch: webImagesDispatch } = useWebImagesContext();
    

    useEffect(() => {
        const fetchContents = async() => {
            const response = await fetch('/api/content')
            const json = await response.json()

            if(response.ok) {
                contentsDispatch({
                    type: 'SET_CONTENTS',
                    payload: json
                })
            }
        }

        fetchContents()
        
    }, [contentsDispatch])

    useEffect(() => {
      const fetchWebImages = async() => {
        const response = await fetch('/api/web-images')
        const json = await response.json()

        if(response.ok) {
            webImagesDispatch({
                type: 'SET_WEB_IMAGES',
                payload: json
            })
        }
      }

      fetchWebImages();
    }, [webImagesDispatch])

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
              path="/admin/about-us"
              element={<AdminAboutUs />}
            />
            <Route
              path="/admin/our-team"
              element={<AdminOurTeam />}
            />
            <Route
              path="/admin/our-classes"
              element={<AdminOurClasses/>}
            />
            <Route
              path="/admin/contact-us"
              element={<AdminContactUs/>}
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
