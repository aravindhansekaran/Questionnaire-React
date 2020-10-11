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
        const choices = [
            {
                choice: 'Hello'
            },
            {
                choice: 'World'
            },
            {
                choice: 'Yall'
            }
        ]
        return <div className='ui segment'>
            <label>{this.props.question}</label>
            <Choice choices={choices}/>
        </div>
    }
}

export default QuestionCard