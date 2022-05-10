import React, {Component} from 'react'
import redwavesbyRoseWright from './CompSci component Images/redwavesbyRoseWright.png'
class CompSciBody2 extends Component{
    render() {
        return (
            <div className='ml-16  w-auto  overflow-x-hidden flex flex-col '>
            <div className='shadow-lg mx-auto max-w-[70vw] m-[3%] w-auto bg-slate-200 flex rounded-3xl p-3 flex-row-reverse'>
                    <div className='bg-slate-100 p-5 rounded-3xl shadow-lg '>
                        <h1 className='text-[6vw] p-3'>Digital Art in Three.js</h1>
                        {/* class 'flexQ-col' is a media querry which changes the flex direction depending on screen width */}
                            {/* class 'flexQ-width-col' is a media querry which changes the width from 50% to 100% depending on screen width */}
                        <div className=' flex flex-col p-[0vw]'>
                                <br/>
                                <p className='text-base indent-10'>Continuing on the theme of visualization, the thought of being able to actually see these equations was exhilarating! This lead me to create digital art focused on the beauty of sin, cos and tan functions. This pice always reminded me of the ocean so I named it Red Waves.</p>
                            <img className=' p-[1vw] rounded-[3vw] ' alt='Red Waves by Rose Wright is an art piece defined by its wave like sin and cos functions visualized with Three.js'src={redwavesbyRoseWright}/>
                        </div>
                    </div>
                </div>
            </div>
            )
    }

}

export default CompSciBody2