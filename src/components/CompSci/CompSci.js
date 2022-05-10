import React, {Component} from 'react'
import CompSciLanding from './CompSci components/CompSci Landing'
import CompSciBody1 from './CompSci components/CompSci Body 1'
import CompSciBody2 from './CompSci components/CompSci Body 2'
import CompSciBody3 from './CompSci components/CompSci Body 3'


class CompSci extends Component{
    render() {
        return (
            <span>
            <CompSciLanding/>
            <CompSciBody1/>
            <CompSciBody2/>
            <CompSciBody3/>

            </span>
            )
    }

}

export default CompSci