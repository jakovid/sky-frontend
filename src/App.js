import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Admin from './pages/admin/Admin';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path="/"
              element={<Admin />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
