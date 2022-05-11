import React, {Component} from 'react'
import RedWaves from './Art components/RedWaves.js'
class Art extends Component{
    render() {
        return (
            <div className='min-h-[100vh]'>
                <div className='mx-auto w-auto h-auto  flex rounded-3xl p-5 flex-col select-none'>
                    {/*header*/}
                    <h1 className='select-none mx-auto mt-0 relative flex items-center justify-center text-[4vw]  px-9 mb-auto bg-slate-200 text-slate-800 shadow-lg rounded-2xl'>Art </h1>
                </div>
                <RedWaves />
            </div>
            )
    }

}

export default Art