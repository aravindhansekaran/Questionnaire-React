import React from 'react'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            questions : []
        }
    }

    componentDidMount = () => {
        fetch('/api/users')
            .then(res => res.json())
            .then(questions => this.setState({questions},() => console.log(this.state.questions)))
            .catch(e => console.log(e))
    }
    render = () => {
        return <div className="ui raised segment container">
            <h1>Home</h1>
            <ul>
    {this.state.questions.map(question => <li key ={question.id}>{question.id} = {question.firstName} {question.lastName}</li>)}
            </ul>
        </div>
    }
}

export default Home