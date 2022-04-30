import HeaderRW from './components/HeaderRW/HeaderRW';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Divider from './components/Divider/Divider';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <span>
      <HeaderRW></HeaderRW>
      <Landing></Landing>
        <Divider/>
      <Home></Home>
      <Footer></Footer>
      <Navbar></Navbar>
    </span>
  );
};

export default App;
