import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import { useState } from 'react'

function About() {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide')
    function toggle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('Show')
        }
    }
    return (
        <div id="about">
            <h2>
                <button className="toggler" onClick={toggle}>{buttonText}</button>
                About Me
            </h2>
            <div style={{display: display}}>
                <p>
                    Hi, welcome to my website! I'm a junior studying CS at Boston University that's still figuring everything out. 
                    Right now, I'm definitely most interested in web development and software engineering.
                    I'm also currently a software engineer in Hack4Impact's Impact Team for the spring, working with a team on building a website for the Hendrix Foundation. 
                    My interests range from binging high fantasy novels like the Stormlight Archive series, 
                    to playing cozy farming games like Stardew Valley and sinking unfathomable hours into rocket league, 
                    so feel free to talk to me about anything nerdy, cause chances are I probably dabble in it :) Contact me at julianlim05@gmail.com.
                </p>
                <br />
                <h3>My Skills</h3>
                <div className="icons">
                    <img width="60" src={HTML} />
                    <img width="60" src={CSS} />
                    <img width="60" src={PY} />
                    <img width="60" src={JS} />
                </div>
            </div>
        </div>
    )
}

export default About