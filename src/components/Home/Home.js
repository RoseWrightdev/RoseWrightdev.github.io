import React, {Component} from 'react'

//conatiner
import HomeContainer from './Home components/HomeContainer'

//preview pages
import Code from './Home components/code'
import Art from './Home components/art'
import Writing from './Home components/writing'
import Contact from './Home components/contact'


class Home extends Component{
    render() {
        return (
            <HomeContainer>
                <Code></Code>
                <Art></Art>
                <Writing></Writing>
                <Contact></Contact>
            </HomeContainer>
            )
    }

}

export default Home