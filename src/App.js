import Landing from './components/Landing/Landing';
import Contact from './components/Landing/Landing components/Contact/Contact';
import Foundation from './components/Landing/Landing components/Foundation/Foundation';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import ScrollRestoration from './components/Scroll Restoration/Scroll Restoration';
import ScrollButton from './components/Landing/Landing components/Scroll Button/ScrollButton';


function App() {
  return (
    <span>
      <ScrollRestoration/>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/About" element={<Foundation/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
          <ScrollButton />

    </span>
  );
};

export default App;
