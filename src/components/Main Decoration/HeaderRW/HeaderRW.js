import React, {Component} from 'react'
import { IoMdRose } from "react-icons/io";
class HeaderRW extends Component{
    render() {
        return (
            <div className='ml-16 mt-0 w-auto h-auto flex rounded-3xl p-5 flex-col select-none'>

                <h1 className='select-none mt-0 relative flex items-center justify-center text-[4.5vw]  px-9 mb-auto bg-slate-200 text-slate-800 shadow-lg rounded-2xl'>RoseWright.dev <IoMdRose className='text-rose-500 bg-slate-300 rounded-lg ml-3'/> </h1>
            </div>
            )
    }

}

export default HeaderRW