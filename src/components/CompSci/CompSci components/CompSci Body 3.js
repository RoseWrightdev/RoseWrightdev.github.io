import React, {Component} from 'react'
import TailwindReactRoseWrightdev from './CompSci component Images/TailwindReactRoseWrightdev.png'
class CompSciBody3 extends Component{
    render() {
        return (
            <div className='ml-16  w-auto  overflow-x-hidden flex flex-col '>
            <div className='shadow-lg mx-auto max-w-[70vw] m-[3%] w-auto bg-slate-200 flex rounded-3xl p-3 flex-row-reverse'>
                    <div className='bg-slate-100 p-5 rounded-3xl shadow-lg '>
                        <h1 className='text-[6vw] p-3'>React + Tailwind</h1>
                        {/* class 'flexQ-col' is a media querry which changes the flex direction depending on screen width */}
                            {/* class 'flexQ-width-col' is a media querry which changes the width from 50% to 100% depending on screen width */}
                        <div className=' flex flex-col p-[0vw]'>
                                <br/>
                                <p className='text-base indent-10'>RoseWrightdev was made in React and Tailwind. It truely is my favorite combination! I figured the best way to show my react skills was to make a website! </p>
                            <img className=' p-[1vw] rounded-[3vw] ' alt='Red Waves by Rose Wright is an art piece defined by its wave like sin and cos functions visualized with Three.js'src={TailwindReactRoseWrightdev}/>
                        </div>
                    </div>
                </div>
            </div>
            )
    }

}

export default CompSciBody3