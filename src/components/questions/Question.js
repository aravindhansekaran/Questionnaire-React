import React from 'react'
import { Button } from 'semantic-ui-react'

class Question extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            flag : false,
            questions : {}
        }
    }

    handleClick = (e) =>{
        
        fetch('/api/questionsreal')
            .then(res => res.json())
            .then(questions => this.setState({questions},() => console.log(this.state.questions)))
            .catch(e => console.error(e))
        this.setState({ flag: true })
    }

    render = () => {
        if(!this.state.flag){
            return <div className="ui container">
                <h1>Questions</h1>
                <Button onClick={this.handleClick}>Click me!</Button>
            </div>
        }
        return <div>
            <h1>Questions</h1>
            {/* <h1>{this.state.questions.name}</h1> */}
        </div>
        
    }
}

export default Question