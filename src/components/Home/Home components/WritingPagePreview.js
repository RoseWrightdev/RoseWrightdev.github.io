import React, { Component } from 'react';
import Three3d from './Home component Images/Three3d.png'


class WritingPagePreview extends Component{
    render() {
        return (
        <div>          
                <a href='index.html'>
                        <div className='Icon group hover:bg-slate-100 transition-all duration-200 ease-linear shadow-lg m-[3%] w-auto h-auto bg-slate-300 flex rounded-3xl p-5 flex-col'>

                        <h1 className='Icon group-hover:bg-slate-200 Icon group-hover:text-rose-500 group-hover:rounded-3xl transition-all duration-200 ease-linear ml-auto mt-0 relative flex items-center justify-center text-right text-[4.5vw]  px-3 mb-2 bg-slate-200 text-slate-700 shadow-lg rounded-lg '>Articles</h1>

                        <img alt='Red Waves by Rose Wright is an art piece defined by its wave like sin and cos function visualized with Three.js' src={Three3d}
                        
                        className=' Icon group-hover:bg-rose-500 transition-all duration-200 ease-linear relative flex items-center justify-center w-auto h-auto max-h-[100vh] shadow-lg rounded-2xl p-1  mt-1 mb-1 mx-auto bg-slate-200'></img>
                </div>
                </a>
        </div>
            )
    }

     
}


export default WritingPagePreview