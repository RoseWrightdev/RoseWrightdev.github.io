import React, { Component } from 'react';
import constructivedrawing from './Home component Images/constructivedrawing.png'


class ArtPagePreview extends Component{
    render() {
        return (
        <div>          
                <a href='index.html'>
                        <div className='Icon1 group hover:bg-slate-100 transition-all duration-200 ease-linear hover:shadow-lg mx-auto max-w-[70vw] m-[3%] w-auto  h-auto flex rounded-3xl p-[1vw] flex-col'>

                        <h1 className='Icon1 group-hover:bg-slate-200 Icon group-hover:text-rose-700 group-hover:rounded-3xl transition-all duration-200 ease-linear ml-auto mt-0 relative flex items-center justify-center text-right text-[4.5vw]  px-3 mb-2 bg-slate-200 text-slate-700 shadow-lg rounded-lg '>Art</h1>

                        <img alt='Red Waves by Rose Wright is an art piece defined by its wave like sin and cos function visualized with Three.js' src={constructivedrawing}
                        
                        className=' Icon1 group-hover:bg-rose-500 transition-all duration-200 ease-linear relative flex items-center justify-center w-auto h-auto max-h-[100vh] shadow-lg rounded-2xl p-1  mt-1 mb-1 mx-auto bg-slate-300'></img>
                </div>
                </a>
        </div>
            )
    }

     
}


export default ArtPagePreview