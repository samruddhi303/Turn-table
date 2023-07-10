import React, { useState } from "react"
import './FoodItemCard.css'
import swal from "sweetalert"

function FoodItemCard({category, description, imgUrl, price, title}) {
    const[quantity,setQuantity] = useState(1)
    async function addToList(){
        const listObject = {
            name: title,
            price: price,
            quantity: quantity

        }
           //add to list in localstorage
           const existingList = JSON.parse(localStorage.getItem('list')) || []
           existingList.push(listObject)
            
           localStorage.setItem('list', JSON.stringify(existingList))
           await swal({
            title: "Item added to list",
            icon: "success"

           })
          window.location.reload()

    }
    return (
        <div className="col-md-3">
            <div className="food-item-card">
                <div> <img src={imgUrl} class="food-item-card-header-img"/>
                </div>
               
                <h3>{title}</h3>
                <p>{description ||title}</p>
                <p>{price}/-only</p>
                <p>{category ||title}</p>

                
                <div className="quantity-btn-container">
                    <span className="qnt-btn" onClick={(e)=>{setQuantity(quantity-1)}}>-</span>
                    <span className="qnt-text">{quantity}</span>
                    <span className="qnt-btn" onClick={(e)=>{setQuantity(quantity+1)}}>+</span>
                </div>
                <div>
                    <button type="Button" className="btn-add-to-list" onClick={addToList}>Add to list</button>
                </div>

                
            </div>
        </div>

    )
}

export default FoodItemCard