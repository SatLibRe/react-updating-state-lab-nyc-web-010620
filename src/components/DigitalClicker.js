// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    handleClick = () =>{
        let newTimesClicked = this.state.timesClicked
        this.setState({
            timesClicked: newTimesClicked + 1
        })
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}