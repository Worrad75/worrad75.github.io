import React from 'react';


export default function Line() {


    const scrollAbout = () => {
        let amt = window.innerHeight
        window.scroll({
            top: amt,
            behavior: 'smooth'
        })
    }

    const scrollProjects = () => {
        let amt = window.innerHeight * 4
        window.scroll({
            top: amt,
            behavior: 'smooth'
        })
    }



    return <div className="content">
        <div className="line">
            <div id="starter-buttons">
                <button className="optionButton" id="aboutScroll" onClick={scrollAbout} >who I am</button>
                <button className="optionButton" id="projectScroll" onClick={scrollProjects} >what I'm up to</button>
            </div>
        </div>
    </div>

}