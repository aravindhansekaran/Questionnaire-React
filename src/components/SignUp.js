import React from 'react'
import {Header,Button,Form,Message} from'semantic-ui-react'
import Question from './questions/Question'

class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            firstname : '',
            lastname : '',
            username : '',
            password : '',
            valid : false,
            error : false
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        console.log(this.state)

        fetch('/api/signup',{
            headers: {'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(this.state)
        }).then(res => {
            if(res.status === 200){
                this.setState({
                    firstname: '',
                    lastname: '',
                    username: '',
                    password: '',
                    valid: true
                })
            }else{
                this.setState({
                    firstname: '',
                    lastname: '',
                    username: '',
                    password: '',
                    error: true
                })
            }
        })
        e.preventDefault()
        
    }

    render = () => {
        if(!this.state.valid && this.state.error){
            return <div className='ui container'>
                <Header as='h2'>SIGN UP</Header>
                <Form>
                    <Form.Input
                        fluid
                        label='First Name'
                        name='firstname'
                        type='text'
                        placeholder='eg. Aravindhan'
                        onChange={this.handleChange}
                        value={this.state.firstname}
                    />
                    <Form.Input
                        fluid
                        label='Last Name'
                        name='lastname'
                        type='text'
                        placeholder='eg. Chandrasekaran'
                        onChange={this.handleChange}
                        value={this.state.lastname}
                    />
                    <Form.Input
                        fluid
                        label='Username'
                        name='username'
                        type='text'
                        placeholder='eg. aravindh@22'
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
                        content='Give correct details and try again'
                    />
                    <Button type='submit' onClick={this.handleSubmit}>Sign Up</Button>
                </Form>
            </div>
        } else if (!this.state.valid){
            return <div className='ui container'>
                <Header as='h2'>SIGN UP</Header>
                <Form>
                    <Form.Input
                        fluid
                        label='First Name'
                        name='firstname'
                        type='text'
                        placeholder='eg. Aravindhan'
                        onChange={this.handleChange}
                        value={this.state.firstname}
                    />
                    <Form.Input
                        fluid
                        label='Last Name'
                        name='lastname'
                        type='text'
                        placeholder='eg. Chandrasekaran'
                        onChange={this.handleChange}
                        value={this.state.lastname}
                    />
                    <Form.Input
                        fluid
                        label='Username'
                        name='username'
                        type='text'
                        placeholder='eg. aravindh@22'
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
                    <Button type='submit' onClick={this.handleSubmit}>Sign Up</Button>
                </Form>
            </div>
        }else{
            return <Question />
        }
    }
}

export default SignUp