import React, {Component} from 'react'
class Footer extends Component{
    render() {
        return (
            <div>
                <div className='bg-slate-200 w-auto ml-16 min-h-[20vw]'>
                    <div className='bg-slate-400 w-auto h-[0.05vw]'></div>
                        <div className='flex flex-row m-[5vw] mt-[3vw] mb-[1vh] justify-evenly'>
                            <div className='rounded-lg  bg-slate-100 w-[33vw] h-auto mx-auto mx-1 text-center'>
                                <h1 className='text-[2.3vw] '>About</h1>
                                < hr/>
                                <p className='text-[1.5vw] text-center p-[0.5vw]'> All rights reserved.<br/>©2022</p>
                            </div>
                            <div className='rounded-lg bg-slate-100 w-[50vw] h-auto mx-auto mx-1 text-center'>
                                <h1 className='text-[2.3vw]'>Contact</h1>
                                < hr/>
                                <p className='text-[1.5vw] text-center p-[0.5vw]'>RoseSophieWright@gmail.com <br/></p>

                            </div>
                            <div className='rounded-lg bg-slate-100 w-[33vw] h-auto mx-auto mx-1 text-center'>
                                <h1 className='text-[2.3vw]'>Privacy</h1>
                                < hr/>
                                <p className='text-[1.5vw] text-center p-[0.5vw]'>RoseWright.dev dose not use tracking software. <br/> <a className='underline text-rose-700 italic whitespace-nowrap hover:bg-rose-100'  href='https://github.com/rosepetaldrift/rosepetaldrift.github.io'>Source</a> </p>
                            </div>
                        </div>
                </div>
            </div>
               )
    }

}

export default Footer