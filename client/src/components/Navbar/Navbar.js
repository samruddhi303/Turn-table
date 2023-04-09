import React, {useState} from "react";
import { myFoodListCount } from '../../util/MyList';
import {Link} from 'react-router-dom'
import "./Navbar.css"


function Navbar({user}) {
    const [foodItemCount, setFoodItemCount] = useState(myFoodListCount)
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
                        <Link to="/myList" className='text-decoration-none'>
                        <h3>🍽️{foodItemCount}</h3>
                        </Link>

                    </div>
                   
                </div>
                <h1 className="name">Radhika <i>foodstuff's</i></h1>
            </div>

        </div>
    )
}
export default Navbar