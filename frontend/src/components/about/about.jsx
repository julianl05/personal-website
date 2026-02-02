import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import TS from '../../assets/ts.svg'
import PY from '../../assets/py.svg'
import REACT from '../../assets/react.svg'
import NODE from '../../assets/node.svg'
import DJ from '../../assets/django.svg'
import MONGODB from '../../assets/mongodb.svg'
import POSTGRESQL from '../../assets/postgresql.svg'
import JAVA from '../../assets/java.svg'
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
                    Hi, welcome to my portfolio! I'm a senior studying CS at Boston University with a passion for developing full-stack web applications. Most recently, I've interned at Splunk, where I worked on automating E2E test deployment and shipping customer-facing features for their OT Intelligence app.
                    My personal interests range from binging high fantasy novels like the Stormlight Archive series, 
                    to playing cozy farming games like Stardew Valley and sinking unfathomable hours into Rocket League, 
                    so feel free to talk to me about anything nerdy, cause chances are I probably dabble in it :) Contact me at limjunre@bu.edu.
                </p>
                <br />
                <h3>My Skills</h3>
                <div className="icons">
                    <img width="60" src={HTML} />
                    <img width="60" src={CSS} />
                    <img width="60" src={PY} />
                    <img width="60" src={JAVA} />
                    <img width="60" src={JS} />
                    <img width="60" src={TS} />
                    <img width="60" src={REACT} />
                    <img width="60" src={NODE} />
                    <img width="60" src={DJ} />
                    <img width="60" src={MONGODB} />
                    <img width="60" src={POSTGRESQL} />
                </div>
            </div>
        </div>
    )
}

export default About