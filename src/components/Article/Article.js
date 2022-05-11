import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Article extends Component{
    render() {
        return (
        <div>
            <div className='ml-16 mt-0 w-auto h-auto flex rounded-3xl p-5 flex-col select-none'>

<h1 className='select-none mx-auto mt-0 relative flex items-center justify-center text-[4vw]  px-9 mb-auto bg-slate-200 text-slate-800 shadow-lg rounded-2xl'>Articles </h1>
</div>          
            <div className='ml-16  	'>
                <div className='justify-center ArticleContainer'>
                <div className='Article italic bold text-slate-500 text-[2vw]'>Coming soon...</div>
                <div className='Article italic bold text-slate-500 text-[2vw]'>Coming soon...</div>
                <div className='Article italic bold text-slate-500 text-[2vw]'>Coming soon...</div>
                <div className='Article italic bold text-slate-500 text-[2vw]'>Coming soon...</div>
                <div className='Article italic bold text-slate-500 text-[2vw]'>Coming soon...</div>
                <div className='Article italic bold text-slate-500 text-[2vw]'>Coming soon...</div>
                <div className='Article italic bold text-slate-500 text-[2vw]'>Coming soon...</div>
                <div className='Article italic bold text-slate-500 text-[2vw]'>Coming soon...</div>
                <div className='Article italic bold text-slate-500 text-[2vw]'>Coming soon...</div>
                </div>
            </div>
        </div>
            )
    }

     
}


export default Article