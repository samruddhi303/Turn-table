import React from "react";
import "./Navbar.css"


function Navbar({user, foodItemCount}) {
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
                    <div className="endnav">
                    <h3>Hello!! {user}</h3>
                    </div>
                     <div className="mylist">
                        <h3>🍽️{foodItemCount}</h3>

                    </div>
                   
                </div>
                <h1 className="name">Radhika <i>foodstuff's</i></h1>
            </div>

        </div>
    )
}
export default Navbar