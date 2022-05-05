import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import HeaderRW from './components/Main Decoration/HeaderRW/HeaderRW';
import Footer from './components/Main Decoration/Footer/Footer';

import ScrollRestoration from './components/Scroll Restoration/Scroll Restoration';

import ArticleTemplate from './components/Articles/Article Template';


function App() {
  return (
    <span>
      <ScrollRestoration/>
      <HeaderRW></HeaderRW>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="Code" element={<ArticleTemplate />} />
            <Route path="Articles" element={<ArticleTemplate />} />
            <Route path="Art" element={<ArticleTemplate />} />
            <Route path="Contact" element={<ArticleTemplate />} />
          </Routes>
      <Footer></Footer>
    </span>
  );
};

export default App;
