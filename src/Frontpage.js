import React from 'react'
import { Component } from 'react'
import './animation.css'
import Line from './Line'

export default class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ["Hi, my name is darrow", "that's right, keep clicking", "I'm a software engineer", "come, let me show you..."],
            count : -1,
            nextText : [],
            placeholder: true,
        };
    }

// when we hit the last 'slide', the text progressing button will disappear and the user will get 2 new buttons:
//      "who I am" and "what I've been up to", which will lead to about me and projects sections respectively


    changeTypedWording = () => {
        if(this.state.count < 3) {
            this.setState({ count: this.state.count += 1, placeholder: false })
            const elem = document.getElementById('type-written')
            if(elem) elem.parentNode.removeChild(elem);

            const test = document.createElement('h1')
            test.id = 'type-written'
            const newText = this.state.text[this.state.count]
            test.innerText = newText
            test.style.maxWidth = newText.length * 5
            document.getElementById("typewriter").appendChild(test)
        } else {
            this.setState({ count: this.state.count += 1 })
            const buttonToRemove = document.getElementById("text-carousel-button");
            buttonToRemove.parentElement.removeChild(buttonToRemove)
        }
    }   

    render() {
        return (
            <div className="frontpage">
                <div id="typewriter">
                    {/* <h1 id="type-written">{this.state.text[0]}</h1> */}
                </div>
                    {this.state.placeholder ? <div id="placeholder"></div> : <></>}
                    <button id="text-carousel-button" onMouseDown={this.changeTypedWording}>click me!</button>
                
                {this.state.count > 3 ? <Line></Line> : <div></div>}
            </div>)
    }
}