import React, {Component} from 'react'
import redwavesbyRoseWright from '../Art images/redwavesbyRoseWright.png'
class RedWaves extends Component{
    render() {
        return (
            <div>    
            <div className='ml-16  w-auto  overflow-x-hidden flex flex-col '>
                <div className='shadow-lg mx-auto max-w-[70vw] m-[3%] w-auto bg-slate-200 flex rounded-3xl p-3 flex-row-reverse'>
                    <div className='bg-slate-100 p-5 rounded-3xl shadow-lg '>
                        {/* class 'flexQ-col' is a media querry which changes the flex direction depending on screen width */}
                        {/* class 'flexQ-width-col' is a media querry which changes the width from 50% to 100% depending on screen width */}
                        <div className='flexQ-col flex p-[0vw]'>
                            <div className='flexQ-width-col'>
                            <h2 className=' text-[3vw] text-center text-rose-600'>RedWaves</h2>
                                <br/>
                                <img className=' p-[1vw] rounded-[4vw] ' alt='Red Waves by Rose Wright is an art piece defined by its wave like sin and cos functions visualized with Three.js' src={redwavesbyRoseWright}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>          
            </div>                  
            )
    }

}

export default RedWaves