import React, {Component} from 'react'
class Footer extends Component{
    render() {
        return (
            <div>
                <div className='bg-slate-200 w-auto ml-16 p-[0.5vw]'>
                        <div className='flex flex-row m-[5vw] mt-[3vw] mb-[3vh] justify-evenly'>
                            <div className='rounded-lg  bg-slate-100 w-[33vw] h-auto  text-center'>
                                <h1 className='text-[2.3vw] text-rose-700 '>About</h1>
                                < hr/>
                                <a className='text-[1.5vw] text-center p-[0.5vw] text-slate-500 underline text-rose-500 italic' href='https://github.com/rosepetaldrift/rosepetaldrift.github.io/blob/master/LICENSE'> RoseWright.dev uses the MIT LICENSE</a>
                            </div>
                            <div className='rounded-lg bg-slate-100 w-[50vw] h-auto mx-5  text-center'>
                                <h1 className='text-[2.3vw]  text-rose-700 '>Contact</h1>
                                < hr/>
                                <p className='text-[1.5vw] text-center p-[0.5vw] text-slate-500'>RoseSophieWright@gmail.com <br/></p>

                            </div>
                            <div className='rounded-lg bg-slate-100 w-[33vw] h-auto  text-center'>
                                <h1 className='text-[2.3vw]  text-rose-700 '>Privacy</h1>
                                < hr/>
                                <p className='text-[1.5vw] text-center p-[0.5vw] text-slate-500'>RoseWright.dev dose not use tracking software. <br/> <a className='underline text-rose-500 italic whitespace-nowrap hover:bg-rose-100'  href='https://github.com/rosepetaldrift/rosepetaldrift.github.io'>Source</a> </p>
                            </div>
                        </div>
                </div>
            </div>
               )
    }

}

export default Footer