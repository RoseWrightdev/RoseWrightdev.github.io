import React, {Component} from 'react'


//preview pages
import Code from './Home components/code'
import Art from './Home components/art'
import Writing from './Home components/writing'
import Contact from './Home components/contact'


class Home extends Component{
    render() {
        return (
            <div className='ml-16 bg-slate-200 w-auto  overflow-x-hidden flex flex-col'>
                <Code></Code>
                <Art></Art>
                <Writing></Writing>
                <Contact></Contact>
            </div>
            )
    }

}

export default Home