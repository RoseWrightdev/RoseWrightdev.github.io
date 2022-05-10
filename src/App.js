import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import HeaderRW from './components/Main Decoration/HeaderRW/HeaderRW';
import Footer from './components/Main Decoration/Footer/Footer';

import ScrollRestoration from './components/Scroll Restoration/Scroll Restoration';

import Article from './components/Article/Article';
import CompSci from './components/CompSci/CompSci';


function App() {
  return (
    <span>
      <ScrollRestoration/>
      <HeaderRW></HeaderRW>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="Computer-Science" element={<CompSci />} />
            
            <Route path="Art" element={<Article />} />
            <Route path="Contact" element={<Article />} />
            <Route path="Articles" element={<Article />} />
          </Routes>
      <Footer></Footer>
    </span>
  );
};

export default App;
