import React from 'react'

class Choice extends React.Component{
    render(){
        return <div className='ui segment'>
            {
                this.props.choices.map(choice => <input type='radio' name='cons' value ={this.props.choice}/>)
            }
        </div>
    }
}

export default Choice