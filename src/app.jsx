import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
