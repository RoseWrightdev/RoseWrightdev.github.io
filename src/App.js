import HeaderRW from './components/HeaderRW/HeaderRW.js';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Divider from './components/Divider/Divider.js';

function App() {
  return (
    <span>
      <HeaderRW></HeaderRW>
        <Divider/>
      <Home></Home>
      <Navbar></Navbar>
    </span>
  );
};

export default App;
