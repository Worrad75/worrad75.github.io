import React from 'react';


export default function Options() {


    const scrollToAbout = () => {
        let amt = window.innerHeight
        window.scroll({
            top: amt,
            behavior: 'smooth'
        })
    }

    const scrollToProjects = () => {
        let amt = window.innerHeight * 4
        window.scroll({
            top: amt,
            behavior: 'smooth'
        })
    }



    return <div className="optionContent">
            <div id="starter-buttons">
                <button className="optionButton" id="aboutScroll" onClick={scrollToAbout} >who I am</button>
                <button className="optionButton" id="projectScroll" onClick={scrollToProjects} >what I'm up to</button>
            </div>
    </div>

}