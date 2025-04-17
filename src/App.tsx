import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <>
      <div className='min-h-screen container mx-auto'>
        <ScrollProgress />
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
    
  );
}

export default App;
