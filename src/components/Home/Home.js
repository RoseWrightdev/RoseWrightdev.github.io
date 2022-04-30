import React, {Component} from 'react'


//preview pages
import CodePagePreview from './Home components/CodePagePreview'
import WritingPagePreview from './Home components/WritingPagePreview'
import PreviewContainer from './Home components/PreviewContainer'
import ArtPagePreview from './Home components/ArtPagePreview'


class Home extends Component{
    render() {
        return (
            
            <div className='ml-16 bg-slate-100 w-auto  overflow-x-hidden flex flex-col'>
                <CodePagePreview></CodePagePreview>
                <WritingPagePreview></WritingPagePreview>
                <ArtPagePreview></ArtPagePreview>
                <PreviewContainer></PreviewContainer>
            </div>
            )
    }

}

export default Home