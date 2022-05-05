import React, {Component} from 'react'


//preview pages
import CodePagePreview from './Home components/CodePagePreview'
import WritingPagePreview from './Home components/WritingPagePreview'
//import PreviewContainer from './Home components/PreviewContainer'
import ArtPagePreview from './Home components/ArtPagePreview'


class Home extends Component{
    render() {
        return (
            <div className='ml-16 0 w-auto  overflow-x-hidden flex flex-col'>
                <CodePagePreview></CodePagePreview>
                <hr className='bg-rose-500 h-[0.5vw] w-[5vw] mx-auto rounded-full'/>
                <WritingPagePreview></WritingPagePreview>
                <hr className='bg-rose-500 h-[0.5vw] w-[5vw] mx-auto rounded-full'/>
                <ArtPagePreview></ArtPagePreview>
            </div>
            )
    }

}

export default Home