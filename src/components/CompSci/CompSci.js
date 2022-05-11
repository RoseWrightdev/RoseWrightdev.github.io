import React, {Component} from 'react'
import CompSciLanding from './CompSci components/CompSci Landing'
import CompSciBody1 from './CompSci components/CompSci Body 1'
import CompSciBody2 from './CompSci components/CompSci Body 2'
import CompSciBody3 from './CompSci components/CompSci Body 3'


class CompSci extends Component{
    render() {
        return (
            <span>
                <div className='mt-0 w-auto h-auto flex rounded-3xl p-5 flex-col select-none'>
                    {/*header*/}
                    <h1 className='select-none mx-auto mt-0 relative flex items-center justify-center text-[4vw]  px-9 mb-auto bg-slate-200 text-slate-800 shadow-lg rounded-2xl'>Comupter Science </h1>
                </div>
            <CompSciLanding/>
            <CompSciBody1/>
            <CompSciBody2/>
            <CompSciBody3/>

            </span>
            )
    }

}

export default CompSci