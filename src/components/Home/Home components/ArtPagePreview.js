import React, { Component } from 'react';
import constructivedrawing from './Home component Images/constructivedrawing.png'


class ArtPagePreview extends Component{
    render() {
        return (
        <div>          
                <a href='index.html'>
                        <div className='hover:bg-slate-400 transition-all duration-200 ease-linear shadow-lg m-[3%] w-auto h-auto bg-slate-300 flex rounded-3xl p-5 flex-col'>
                        <h1 className='ml-auto mt-0 relative flex items-center justify-center text-right text-[4.5vw]  px-3 mb-2 bg-slate-200 text-slate-700 shadow-lg rounded-2xl'>Art</h1>
                        <img alt='Red Waves by Rose Wright is an art piece defined by its wave like sin and cos function visualized with Three.js' src={constructivedrawing} className='relative flex items-center justify-center w-auto h-auto max-h-[100vh] shadow-lg rounded-2xl p-3  mt-2 mb-2 mx-auto bg-slate-200'></img>
                </div>
                </a>
        </div>
            )
    }

     
}


export default ArtPagePreview