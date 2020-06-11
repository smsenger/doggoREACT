import React, { Component } from 'react'

export default class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    
    onChange = (event) => {
        const newValue = event.target.value;
        this.setState({ inputValue: newValue });
    }

    onAlertClick = () => {
        alert(this.state.inputValue);
    }


    onResetClick = () => {
        this.setState({ inputValue: '' });
    }

    render() {
        return (
            <div>
                <label htmlFor='input'>
                    <span>Text Input</span>
                    <input type="password" value={this.state.inputValue} onChange={this.onChange} />
                </label>
                <button onClick={this.onAlertClick}>Alert Me!</button>
                <div>
                    <button onClick={this.onResetClick}>Clear</button>
                </div>
            </div>
        )
    }
}
