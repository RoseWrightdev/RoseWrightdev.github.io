import React, {Component} from 'react'
import Divider from '../Divider/Divider.js';


//preview pages
import CodePagePreview from './Home components/CodePagePreview'
import WritingPagePreview from './Home components/WritingPagePreview'
//import PreviewContainer from './Home components/PreviewContainer'
import ArtPagePreview from './Home components/ArtPagePreview'


class Home extends Component{
    render() {
        return (
            
            <div className='ml-16 bg-slate-200 w-auto  overflow-x-hidden flex flex-col'>
                <CodePagePreview></CodePagePreview>
                    <Divider/>
                <WritingPagePreview></WritingPagePreview>
                    <Divider/>
                <ArtPagePreview></ArtPagePreview>
            </div>
            )
    }

}

export default Home