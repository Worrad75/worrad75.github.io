import React from 'react'
import { Component } from 'react'
import './animation.css'
import Line from './Line'

export default class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ["Hi, my name is Darrow.", "Please keep clicking.", "I'm a Software Engineer!", "come, let me show you..."],
            count : -1,
            nextText : [],
            placeholder: true,
        };
    }

// when we hit the last 'slide', the text progressing button will disappear and the user will get 2 new buttons:
//      "who I am" and "what I've been up to", which will lead to about me and projects sections respectively


    changeTypedWording = () => {
        if (this.state.count < this.state.text.length - 1) {
            const newCount = this.state.count + 1
            this.setState({ count: newCount, placeholder: false })
            const elem = document.getElementById('type-written')
            if(elem) elem.parentNode.removeChild(elem);

            const freshTypewritter = document.createElement('h1')
            freshTypewritter.id = 'type-written'
            const newText = this.state.text[newCount]
            freshTypewritter.innerText = newText
            freshTypewritter.style.maxWidth = newText.length * 5
            document.getElementById("typewriter").appendChild(freshTypewritter)
        } else {
            const newCount = this.state.count + 1
            this.setState({ count: newCount })
            const buttonToRemove = document.getElementById("text-carousel-button");
            buttonToRemove.parentElement.removeChild(buttonToRemove)
        }
    }   

    render() {
        return (
            <div className="frontpage">

                <div id="typewriter"></div>
                {this.state.placeholder ? <div id="placeholder"></div> : <></>}
                
                <button id="text-carousel-button" onMouseDown={this.changeTypedWording}>click me!</button>
                
                {this.state.count > this.state.text.length -1 ? <Line></Line> : <div></div>}

            </div>)
    }
}