import React, {Component} from 'react'
import redwavesbyRoseWright from '../Art images/redwavesbyRoseWright.png'
class RedWaves extends Component{
    render() {
        return (
            <div className=' w-auto  overflow-x-hidden flex flex-col '>
                <div className='shadow-lg mx-auto max-w-[70vw] m-[3%] w-auto bg-slate-200 flex rounded-3xl p-[0.5vw] flex-row-reverse'>
                    <div className='bg-slate-100 p-5 rounded-3xl shadow-lg '>
                        {/* class 'flexQ-col' is a media querry which changes the flex direction depending on screen width */}
                        {/* class 'flexQ-width-col' is a media querry which changes the width from 50% to 100% depending on screen width */}
                        <div className=' flex flex-col p-[0vw]'>
                            <div className=''>
                                <h2 className='text-2xl text-center text-rose-500 p-3'>RedWaves</h2>
                                <img className=' p-[1vw] rounded-[4vw] ' alt='Red Waves by Rose Wright is an art piece defined by its wave like sin and cos functions visualized with Three.js' src={redwavesbyRoseWright}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>            
            )
    }

}

export default RedWaves