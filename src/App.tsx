import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Tourism from './pages/Tourism';
import TourDetail from './pages/TourDetail';
import VisaAssistance from './pages/VisaAssistance';
import AirTicketing from './pages/AirTicketing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/visa-assistance" element={<VisaAssistance />} />
          <Route path="/air-ticketing" element={<AirTicketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 