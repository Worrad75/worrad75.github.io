import React from 'react'
import { Component } from 'react'
import './animation.css'

export default class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : "Hi, my name is darrow",
            count : 0,
            nextText : []
        };
    }

    changeTypedWording = () => {
        this.setState({ text: "follow me" });
    }

    render() {

        return (
            <div className="frontpage" id="typewriter">
                <h1 onMouseDown={this.changeTypedWording}>{this.state.text}</h1>
            </div>)
    }
}