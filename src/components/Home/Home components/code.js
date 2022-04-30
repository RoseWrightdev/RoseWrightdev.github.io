import React, {Component} from 'react'
import ThreejsPreview from './code components/ThreejsPreview.js'


class Code extends Component{
    render() {
        return (
            <a href='index.html'>
            <div className='shadow-lg m-[2%] w-auto h-screen bg-white flex rounded-3xl'>
                <ThreejsPreview></ThreejsPreview>
            </div>
            </a>
            )
    }

}

export default Code