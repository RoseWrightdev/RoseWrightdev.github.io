import React, {Component} from 'react'
import Landing from './Landing/Landing'
import Home from './Home/Home'

class Main extends Component{
    render() {
        return (
            <div>
                <Landing/>
                <Home/>
            </div>
            )
    }

}

export default Main