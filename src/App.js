import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Design from './pages/Design'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';

function App() {
  return (
    <div className="App">
    <Router>
<Navbar />
<Hero />
      <Routes>
        <Route path="./" element={<Home />}/>
        <Route path="./About" element={<About />}/>
        <Route path="./Design" element={<Design />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
