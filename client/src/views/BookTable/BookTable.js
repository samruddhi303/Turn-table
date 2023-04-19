import React, { useEffect } from "react";

import "./BookTable.css"

import { loginRequired } from "../../util/loginRequired";
import Navbar from "../../components/Navbar/Navbar";
import {currentUser} from"../../util/currentUser";//fot taking Navber in this page
function BookTable() {




    useEffect(() => {
        {
            loginRequired()
        }
    }, [])




    return (
        <div>
            <Navbar user={currentUser?.name}/>
            <div className="container">
                
                   <div className="Tables"><button class = "book">Book Table 1</button></div>
                   <div className="Tables"><button class = "book">Book Table 2</button></div>
                   <div className="Tables"><button class = "book">Book Table 3</button></div>
                   

               </div>
               <div><button class ="confirmTable">Confirm Table</button></div>
         
        </div>
    )
}

export default BookTable