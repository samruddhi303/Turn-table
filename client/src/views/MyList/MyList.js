import React from "react";
import axios from 'axios' 
import swal from "sweetalert";
import Navbar from "../../components/Navbar/Navbar"
import { myFoodListItems } from "../../util/MyList";
import { currentUser } from './../../util/currentUser'
import "./MyList.css"


function MyList() {
    async function placeFoodOrder(){
        const responce = await axios.post("/orderFoodItems", {
            userId: currentUser._id,
            tableNumber: localStorage.getItem("tableNumber") || 1, 
            items: myFoodListItems

        })
       if (responce.data.success){
        await swal("Order placed", responce.data.message, "success")
        localStorage.removeItem("list")
        window.location.href = "/"
       }
    }
    return (
        <div>
            <Navbar/>
            <h1 className="text-center">MyList</h1>
            <div className="Container">
            {
                myFoodListItems.map((item, index)=>{
                    return(
                        <div>
                            <h6>Name: {item.name}</h6>
                            <h6>Quantity: {item.quantity}</h6>
                            <h6>price: {item.price}</h6>
                           <hr/>
                        </div>
                    )
                })
            }
            </div>
            <button className=" btn btn-lg btn-outline-dark confirm-button " onClick={placeFoodOrder}>confirm order</button>
        </div>

    )
}

export default MyList