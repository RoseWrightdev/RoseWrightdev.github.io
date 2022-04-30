import React, {Component} from 'react'


//preview pages
import CodePagePreview from './Home components/CodePagePreview'
import PreviewContainer from './Home components/PreviewContainer'

class Home extends Component{
    render() {
        return (
            
            <div className='ml-16 bg-slate-100 w-auto  overflow-x-hidden flex flex-col'>
                <CodePagePreview></CodePagePreview>
                <PreviewContainer></PreviewContainer>
                <PreviewContainer></PreviewContainer>
                <PreviewContainer></PreviewContainer>
            </div>
            )
    }

}

export default Home