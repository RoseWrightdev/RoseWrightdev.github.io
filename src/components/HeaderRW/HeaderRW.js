import React, {Component} from 'react'
import { IoMdRose } from "react-icons/io";
class HeaderRW extends Component{
    render() {
        return (
            <div className='ml-16 w-auto h-auto flex rounded-3xl p-5 flex-col select-none'>

                <h1 className='select-none mt-14 relative flex items-center justify-center text-[4.5vh]  px-9 mb-2 bg-slate-200 text-slate-500 shadow-lg rounded-2xl'>RoseWright.dev <span><IoMdRose/></span> </h1>
            </div>
            )
    }

}

export default HeaderRW