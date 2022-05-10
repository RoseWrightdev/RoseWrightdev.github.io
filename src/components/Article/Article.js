import React, {Component} from 'react'
import { Outlet } from "react-router-dom";

class Article extends Component{
    render() {
        return (
            <div className= 'h-screen w-auto'>
               <Outlet />
            </div>
            )
    }

}

export default Article