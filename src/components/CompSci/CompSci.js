import React, {Component} from 'react'
import CompSciLanding from './CompSci components/CompSci Landing'
import CompSciBody1 from './CompSci components/CompSci Body 1'


class CompSci extends Component{
    render() {
        return (
            <span>
            <CompSciLanding/>
            <CompSciBody1/>
            </span>
            )
    }

}

export default CompSci