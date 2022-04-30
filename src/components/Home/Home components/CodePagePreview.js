import React, { Component } from 'react';
import redwavesbyRoseWright from './HomePage Images/redwavesbyRoseWright.png'
import { MdHome, MdCode, MdPalette, MdMode, MdAccountCircle } from "react-icons/md";

class CodePagePreview extends Component{
    render() {
        return (
        <div>          
                <a href='index.html'>
                        <div className='shadow-lg m-[3%] w-auto h-auto bg-slate-50 flex rounded-3xl p-5 flex-col'>
                                <h1 className='ml-auto relative flex items-center justify-center text-[5vh]  px-3 mt-2 mb-2 bg-slate-200 text-slate-600 shadow-lg rounded-2xl'>Programming</h1>
                        <img alt='' src={redwavesbyRoseWright} className='relative flex items-center justify-center w-auto h-auto max-h-[100vh] shadow-lg rounded-2xl p-3  mt-2 mb-2 mx-auto bg-slate-200'></img>
                </div>
                </a>
        </div>
            )
    }

     
}


export default CodePagePreview