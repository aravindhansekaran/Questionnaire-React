import React from 'react'
import { Button } from 'semantic-ui-react'

import QuestionCard from './QuestionCard'
// import Choice from './Choice'

class Question extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            flag : false,
            questions : {}
        }
    }

    handleClick = async (e) =>{
        
        await fetch('/api/questionsreal',{headers:{'Content-Type' : 'application/json'}})
            .then(res => res.json()
            .then(questions => this.setState({ questions }))
            )
            .catch(e => console.error(e))
        this.setState({ flag: true })
        // console.log(this.state.questions['questionnaire'].id)
    }

    render = () => {
        
        if(!this.state.flag){
            return <div className="ui container">
                <h1>Questions</h1>
                <Button onClick={this.handleClick}>Submit</Button>
            </div>
        }
        
        return <div>
            <h1>Questions</h1>
            <h1>{this.state.questions.questionnaire.id}</h1>
            <QuestionCard question='What is your name' />
        </div>
        
    }
}

export default Question