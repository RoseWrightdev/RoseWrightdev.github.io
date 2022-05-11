import React, {Component} from 'react'
//import redwavesbyRoseWright from './redwavesbyRoseWright.png'


class Landing extends Component{
    render() {
        return (
            <div className='ml-16  w-auto  overflow-x-hidden flex flex-col '>
                <div className='transition-all duration-200 ease-linear shadow-lg mx-auto max-w-[70vw]   m-[3%] w-auto bg-slate-200 flex rounded-3xl p-[0.5vw] flex-row-reverse'>
                    <div className=''>
                        <div className='bg-slate-100 p-[3vw] rounded-3xl shadow-lg '>
                            <h1 className='text-[4vw] text-rose-600 p-[0vw] m-[0vw]'>Hi, I'm Rose – UI and design system developer.</h1>
                            <br/>
                            <p className='text-[3vw] p-[0vw] m-[0vw]'>I help people build interactive and compelling user interfaces. I work with a strong focus on simplicity, accessibility and responsive design.</p>
                            <br/>
                            {/*
                            <a href='index.html' className='p-[0vw] m-[0vw] underline text-rose-700 italic whitespace-nowrap text-[2vw] hover:bg-rose-100'> Read the full article</a>
        */}
                        </div>
                        
                    </div>
                    <div className=''>
                    </div>
                </div>
            </div>
            )
    }

}

export default Landing