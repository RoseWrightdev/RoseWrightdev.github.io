import React, {Component} from 'react'
class Contact extends Component{
    render() {
        return (
            <div className='ml-16  w-auto  overflow-x-hidden flex flex-col h-[50vh] '>
                <div className='shadow-lg mx-auto max-w-[70vw] m-[3%] w-auto bg-slate-200 flex rounded-3xl p-3 flex-row-reverse'>
                    <div className='bg-slate-100 p-5 rounded-3xl shadow-lg '>
                        {/* class 'flexQ-col' is a media querry which changes the flex direction depending on screen width */}
                        {/* class 'flexQ-width-col' is a media querry which changes the width from 50% to 100% depending on screen width */}
                        <div className='flexQ-col flex p-[0vw]'>
                            <div className='flexQ-width-col'>
                                <p className='text-base'>Contact me with questions @RoseSophieWright@gmail.com </p>
                                <br/>
                                <p className='text-base'>If you're a hiring manager or a recruiter I recommend you tag your emails [BUSINESS] for faster replies. I'll get back to you 5-7 business days.</p>
                            <div/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            )
    }

}

export default Contact