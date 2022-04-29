import React, {Component} from 'react'
import { MdHome, MdCode, MdPalette, MdMode, MdAccountCircle } from "react-icons/md";

const NavbarIcon = ({icon, text = 'ERR Text Parameter Undefined'}) => (

    <div className="NavbarIcon group">
    {icon}
    <span className="NavbarIcon-ToolTip group-hover:scale-100"> 
        {text}
    </span>
    </div>
    

);

const IconSize = 36;



class Navbar extends Component {
    
  render() {
    return (
        <nav className='fixed top-0 left-0 h-screen w-16 flex flex-col
        bg-sky-50 shadow-lg justify-evenly'>
            <a href='index.html'>
                <NavbarIcon icon={<MdHome size={IconSize}/>} text='You are here'/>
            </a>
            <a href='index.html'>
                <NavbarIcon icon={<MdCode size={IconSize}/>} text='Code'/>
            </a>
            <a href='index.html'>
                <NavbarIcon icon={<MdPalette size={IconSize}/>} text='Art'/>
            </a>
            <a href='index.html'>
                <NavbarIcon icon={<MdMode size={IconSize}/>} text='Writing'/>           
            </a>
            <a href='index.html'>
                <NavbarIcon icon={<MdAccountCircle size={IconSize}/>} text='Contact'/>
            </a>

        </nav>
    );
  };
};

export default Navbar