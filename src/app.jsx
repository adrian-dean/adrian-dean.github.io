import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/"
          element={
            <div className="p-8 font-sans bg-gray-900 min-h-screen text-white">
              <h1 className="text-4xl font-bold mb-4 text-teal-400">Adrian Dean</h1>
              <p className="text-lg text-gray-300">Welcome to my portfolio website.</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
