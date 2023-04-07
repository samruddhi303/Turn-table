import React from "react";
import "./Navbar.css"


function Navbar({user}) {
    return (
        <div>
            <div class="bg-img">
                <div class="container">
                    <div class="topnav">
                        <a href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                      
                    
                    </div>
                    <h3>Hello {user}</h3>
                </div>
                <h1 className="name">Radhika <i>foofstuffs</i></h1>
            </div>

        </div>
    )
}
export default Navbar