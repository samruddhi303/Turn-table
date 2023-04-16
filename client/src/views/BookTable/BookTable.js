import React, { useEffect } from "react";

import "./BookTable.css"

import { loginRequired } from "../../util/loginRequired";

function BookTable() {




    useEffect(() => {
        {
            loginRequired()
        }
    }, [])




    return (
        <div>
            <div className="container">
                
                   <div className="Tables"></div>
                   <div className="Tables"></div>
                   <div className="Tables"></div>
                   

               </div>
         
        </div>
    )
}

export default BookTable