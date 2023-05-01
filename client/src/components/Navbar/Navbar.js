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
                        <a href="/"><b>Home</b></a>
                        <a href="MyList"><b>MyList</b></a>
                        <a href="MyProfile"><b>MyProfile</b></a>
                        <a href="BookTable"><b>BookTable</b></a>
                    
                    
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