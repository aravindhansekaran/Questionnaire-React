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
            <h1>Survey Dash board</h1>
            <ol>
                {this.state.questions.map(user => <li id={user._id}>{user.username} = {user.firstname} {user.lastname}</li>)}
            </ol>
        </div>
    }
}

export default Home