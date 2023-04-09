import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import { myFoodListItems } from "../../util/MyList";
import "./MyList.css"


function MyList() {
    return (
        <div>
            <Navbar/>
            <h1 className="text-center">MyList</h1>
            {
                myFoodListItems.map((item, index)=>{
                    return(
                        <div>
                            <h6>Name: {item.name}</h6>
                            <h6>Quantity: {item.Quantity}</h6>
                            <h6>price: {item.price}</h6>
                           <hr/>
                        </div>
                    )
                })
            }
            <button className="btn btn-primary">confirm order</button>
        </div>

    )
}

export default MyList