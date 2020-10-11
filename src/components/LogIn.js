import React from 'react'
import { Form,Header,Button,Message } from 'semantic-ui-react'

import Question from './questions/Question'

class LogIn extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            loggedin: false,
            error : false
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({...this.state,[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        fetch('/api/login',
         {headers: { 'Content-Type': 'application/json' },
         method : 'POST',
         body : JSON.stringify(this.state)
         }).then(res => {
                if(res.status === 200){
                this.setState({
                    loggedin : true
                })
            }else{
                this.setState({
                    username : '',
                    password : '',
                    error : true
                })
            }})
        e.preventDefault()    
    }

    render = () => {
        if (!this.state.loggedin && this.state.error){
            return <div className='ui container'>
                <Header as='h2'>LOG IN</Header>
                <Form>
                    <Form.Input
                        fluid
                        label='Username'
                        name='username'
                        type='text'
                        placeholder='eg. aravindh@22'
                        id='form-input-user-name'
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <Form.Input
                        fluid
                        label='Password'
                        name='password'
                        type='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <Message
                        error
                        header='Something went wrong'
                        content='Check the credentials and try again'
                    />
                    <Button type='submit' onClick={this.handleSubmit}>Log In</Button>
                </Form>
            </div>
        }else if(!this.state.loggedin){
            return <div className='ui container'>
                <Header as='h2'>LOG IN</Header>
                <Form>
                    <Form.Input
                        fluid
                        label='Username'
                        name='username'
                        type='text'
                        placeholder='eg. aravindh@22'
                        id='form-input-user-name'
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <Form.Input
                        fluid
                        label='Password'
                        name='password'
                        type='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <Button type='submit' onClick={this.handleSubmit}>Log In</Button>
                </Form>
            </div>
        }else{
            return <Question />
        }
        
    }
}

export default LogIn
