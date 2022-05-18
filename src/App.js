import Main from './components/Main/Main';
import Landing from './components/Landing/Landing';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import ScrollRestoration from './components/Scroll Restoration/Scroll Restoration';


function App() {
  return (
    <span>

      <ScrollRestoration/>
      <Navbar/>
      <Background/>
          <Routes>
            <Route path="/" element={<Landing/>} />
          </Routes>

    </span>
  );
};

export default App;
