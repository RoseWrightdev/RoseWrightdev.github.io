import React, {Component} from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { IoMdRose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavbarIcon = ({icon, text = 'ERR Text Parameter Undefined'}) => (

    <div className="NavbarIcon group">
    {icon}
    <span className="NavbarIcon-ToolTip group-hover:scale-100 z-100"> 
        {text}
    </span>
    </div>
    

);

const IconSize = 36;



class Navbar extends Component {

    
    
  render() {
    return (
        <span>
        <nav className='bg-[#ffffff50] z-50 top-0 left-0 h-auto max-h-screen w-screen flex flex-row'>
        <NavLink to="/" className='justify-start'>
            <h1 className='justify-start m-5 flex font-black'><IoMdRose className='m-1 text-main-100' size={16}></IoMdRose>RoseWright.dev</h1>
        </NavLink>
        <NavLink to="/Contact" className='ml-auto'>
            <h1 className='my-5 mr-10'>Contact</h1>
        </NavLink>
        </nav>
        <hr></hr>

        </span>
    );
  };
};

export default Navbar