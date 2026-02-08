import './navbar.css'
import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div id="navbar">
            <h1>Julian Lim Jun Ren</h1>
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#exp" onClick={() => setIsOpen(false)}>Experiences</a>
            </div>
        </div>
    )
}

export default Navbar