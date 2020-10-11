import React from 'react'

import Choice from './Choice'

class QuestionCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type:'',
            question : '',
            choices : []
        }
    }

    render() {
        return <div className='ui segment'>
            <label>{this.props.question}</label>
            
        </div>
    }
}

export default QuestionCard