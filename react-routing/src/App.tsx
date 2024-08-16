import './App.css'
import Home from './pages/Homepage';
import LoginPage from './pages/Loginpage';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/react-routing' element={<Home />} />
          <Route path='/react-routing/login' element={<LoginPage />} />
          <Route path='/react-routing/about' element={ <About /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
