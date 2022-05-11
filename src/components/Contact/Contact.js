import React, {Component} from 'react'
class Contact extends Component{
    render() {
        return (
            <div>
            <div className='ml-16 mt-0 w-auto h-auto flex rounded-3xl p-[0.5vw] flex-col select-none'>
            <h1 className='select-none mx-auto mt-0 relative flex items-center justify-center text-[4vw]  px-9 mb-auto bg-slate-200 text-slate-800 shadow-lg rounded-2xl'>Contact </h1>
            </div>    
            <div className='ml-16  w-auto  overflow-x-hidden flex flex-col '>
                <div className='shadow-lg mx-auto max-w-[70vw] m-[3%] w-auto bg-slate-200 flex rounded-3xl p-3 flex-row-reverse'>
                    <div className='bg-slate-100 p-5 rounded-3xl shadow-lg '>
                        {/* class 'flexQ-col' is a media querry which changes the flex direction depending on screen width */}
                        {/* class 'flexQ-width-col' is a media querry which changes the width from 50% to 100% depending on screen width */}
                        <div className='flexQ-col flex p-[0vw]'>
                            <div className='flexQ-width-col'>
                            <h2 className=' text-lg text-center text-rose-600'>Contact me with questions at RoseSophieWright@gmail.com </h2>
                                <br/>
                                <p className='text-base indent-10'>If you're a hiring manager or a recruiter I recommend you tag your emails [BUSINESS] for faster replies. I'll get back to you 5-7 business days.</p>                            <div/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
            </div>          
            )
    }

}

export default Contact