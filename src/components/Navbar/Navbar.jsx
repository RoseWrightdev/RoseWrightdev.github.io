import React, {Component} from 'react'
import { MdAccountCircle } from "react-icons/md";
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
        <nav className='bg-white fixed top-0 left-0 h-screen max-h-screen w-16 mediaQNavMB flex-col
        shadow-lg justify-between'>
             <NavLink to="/">
                <NavbarIcon icon={<IoMdRose size={IconSize}/>} text='Home'/>
            </NavLink>
            <NavLink to="/">
                <NavbarIcon icon={<MdAccountCircle size={IconSize}/>} text='Contact'/>
            </NavLink>
        </nav>
        <nav className='bg-[#ffffff50] z-50 top-0 left-0 h-auto max-h-screen w-screen flex flex-row mediaQNavDT'>
                <h1 className='justify-start m-5 flex font-black'><IoMdRose className='m-1 text-main-100' size={16}></IoMdRose>RoseWright.dev</h1>
                <h1 className='my-5 ml-auto mr-10'>Contact</h1>
        </nav>
        <hr></hr>

        </span>
    );
  };
};

export default Navbar