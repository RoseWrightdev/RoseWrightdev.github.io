import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import HeaderRW from './components/Main Decoration/HeaderRW/HeaderRW';
import Footer from './components/Main Decoration/Footer/Footer';

import ScrollRestoration from './components/Scroll Restoration/Scroll Restoration';
import PlaceHolder from './components/Placeholder/PlaceHolder';

import Article from './components/Article/Article';
import CompSci from './components/CompSci/CompSci';
import Art from './components/Art/Art'
import Contact from './components/Contact/Contact';


function App() {
  return (
    <span>
      <ScrollRestoration/>
      <HeaderRW></HeaderRW>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="Computer-Science" element={<CompSci />} />
            
            <Route path="Art" element={<Art />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Articles" element={<Article />} />
          </Routes>
      <Footer></Footer>
    </span>
  );
};

export default App;
