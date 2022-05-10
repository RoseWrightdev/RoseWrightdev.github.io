import React, {Component} from 'react'
import s3dsim from './CompSci component Images/s3dsim.png'
import Example1 from './CompSci component Images/Example1.png'
class CompSciBody1 extends Component{
    render() {
        return (
            <div className='ml-16  w-auto  overflow-x-hidden flex flex-col '>
            <div className='shadow-lg mx-auto max-w-[70vw] m-[3%] w-auto bg-slate-200 flex rounded-3xl p-3 flex-row-reverse'>
                    <div className='bg-slate-100 p-5 rounded-3xl shadow-lg '>
                        <h1 className='text-[6vw] p-3'>Exploring JavaScript</h1>
                        {/* class 'flexQ-col' is a media querry which changes the flex direction depending on screen width */}
                        {/* class 'flexQ-width-col' is a media querry which changes the width from 50% to 100% depending on screen width */}
                        <div className=' flex flex-col p-[0vw]'>
                            <div className=''>
                                <h2 className='text-2xl text-center text-rose-500 p-3'>Three.js</h2>
                                <p className='text-base indent-10'>The creation of 3d worlds intriged me. I needed to know how it was done. At the time I knew this was ambitious. My rudimentary understanding of JavaScript meant that I would have to learn a lot very quickly if I was to meet my goal. So for one of my early projects I started by working through Three.js documentation. Here's the end result! What I have always loved about my first creation is how it simulates entropy. The animation starts out very organized but overtime you can watch it driff into infinity as it twists itself into nothing. </p>
                                <br/>
                                <a href='https://rosewright.dev/RoseWrightdev-Example-1/'><em className='italic underline text-rose-900 bg-rose-200 whitespace-nowrap'>click the image to animate!</em></a>
                                <br/>
                                <a href='https://rosewright.dev/RoseWrightdev-Example-1/'>
                                <img className=' p-[1vw] rounded-[4vw] ' alt='A twisting polygon made up of 21 cubes intersecting and spining on both of their axises. These cubes range in color from light to dark purple.'src={Example1}/>
                                </a>
                                <br/>
                                <h2 className='text-2xl text-center text-rose-500 p-3'>Three.js + Ammo.js</h2>

                                <p className='text-base indent-10'>The natural next step is to add physics. The good thing is that it isnt too complated. With Ammo.js adding Ridgid bodies to your physics world is made easy . </p>
                            <div/>

                            <a href='https://rosewright.dev/RoseWrightdev-Example-2/'><em className='italic underline text-rose-900 bg-rose-200 whitespace-nowrap'>click the image to animate!</em></a>
                                <br/>
                                <br/>
                                <a href='https://rosewright.dev/RoseWrightdev-Example-2/'>
                                <img className=' p-[1vw] rounded-[4vw] ' alt='A twisting polygon made up of 21 cubes intersecting and spining on both of their axises. These cubes range in color from light to dark purple.'src={s3dsim}/>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>            
            )
    }

}

export default CompSciBody1