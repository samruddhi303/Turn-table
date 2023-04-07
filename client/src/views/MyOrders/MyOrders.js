import React, {useEffect} from "react";

import { loginRequired } from "../../util/loginRequired";

import "./MyOrders.css"


function MyOrders(){
  
      
    useEffect(()=>{
        {
          loginRequired()
        }
       }, [])
      

    return(
        <div>
         <h1>MyOrders</h1>
        </div>
    )
}
export default MyOrders