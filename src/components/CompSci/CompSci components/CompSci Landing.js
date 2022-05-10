import React, {Component} from 'react'
import redwavesbyRoseWright from './CompSci component Images/redwavesbyRoseWright.png'
import Figure_1 from './CompSci component Images/Figure_1.png'
class CompSciLanding extends Component{
    render() {
        return (
            <div className='ml-16  w-auto  overflow-x-hidden flex flex-col '>
                <div className='shadow-lg mx-auto max-w-[70vw] m-[3%] w-auto bg-slate-200 flex rounded-3xl p-3 flex-row-reverse'>
                    <div className='bg-slate-100 p-5 rounded-3xl shadow-lg '>
                        <h1 className='text-[6vw] p-3'>Laying the Foundation</h1>
                        {/* class 'flexQ-col' is a media querry which changes the flex direction depending on screen width */}
                        {/* class 'flexQ-width-col' is a media querry which changes the width from 50% to 100% depending on screen width */}
                        <div className='flexQ-col flex p-[0vw]'>
                            <img className='flexQ-width-col p-[1vw] rounded-[3vw]' alt='MatplotLib junk Data Visualized with a slope'src={Figure_1}/>
                            <div className='flexQ-width-col'>
                                <p className='text-base indent-10'>Like many programmers I got my start in python. I was inspired by astrophysicists. I always wondered how they visualized and computed their cosmological data sets. When I found out they used Python and MatplotLib I just had to try it myself. This curiosity is what sent me on my journey through computer science and ultimately web development.</p>
                                <br/>
                                    <em><p className='text-base'>"Curiosity is the wick in the candle of learning." - William Arthur Ward</p></em>
                                <br/>
                                <br/>
                                <p className='text-base indent-10'>On this walk through the forest of knowledge curiosity bit me once again. "What's JavaScript?". That question lead me to learn HTML, CSS and JavaScript. With that foundation I soon picked up frameworks like React, Ammo, Three.js and Tailwind. </p>
                                <p className='text-base indent-10'>Before I knew it I went from Fizzbuzz and rock paper scissors to making apps with Electron/ Neutralino. I learned how to plan, stlye and deliver a website from nothing. I learned how to prioritze feautures in my developement pipeline depending on the needs of the project. </p>
                                <p className='text-base indent-10'>The most imporant thing I found of this journey is my love for web-developement. Guided by curiosity I've found everything I need to succeed. I hope you too can imbrace your curiosity.</p>    
                            <div/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            )
    }

}

export default CompSciLanding