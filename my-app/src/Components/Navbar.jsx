import React, {useState} from 'react';
import '../stylesheets/App.css';
import GHWinitGirl from '../assets/cutemlhgirl.png';

// function should be same spelling as the component name
function NavBar() {
    // showLinks is a bool
    // if showLinks is true, we hide the links
    // and put them in a hamburger menu
    // setShowLinks is used to set showLinks' value
    const [hideLinks, setHideLinks] = useState(false);
    return (
        <nav className="navbar">
            <div className="leftSide">
                <div id={hideLinks ? "hidden" : ""}className="links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <img className="mlh-icon" src={GHWinitGirl} alt="GHWinitGirl"></img>
                </div>
                <button onClick={() => setHideLinks(!hideLinks)}>Open</button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Hello!"></input>
                <button className="search-button">Search</button>
            </div>
        </nav>
    );
}

export default NavBar;

