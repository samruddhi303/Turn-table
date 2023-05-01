

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./BookTable.css"
import TableCard from '../../components/TableCard/TableCard';
import Navbar from '../../components/Navbar/Navbar';
import { currentUser } from '../../util/currentUser';

import { loginRequired } from '../../util/loginRequired';

function BookTable() {
  const [currentTable, setAvailableTables] = useState([]);
  async function allTables() {
    const response = await axios.get('/availableTables')
    console.log(response.data.data);
    setAvailableTables(response.data.data)
  }
  useEffect(() => {
    allTables()
  }, [])
  useEffect(() => {
    loginRequired()
  }, [])
  return (
    
      <div className=''>
        <Navbar user={currentUser?.name}/>
       <div className='title-container' >
           Book Table 
       </div>
        <div className=' conatiner row '>
          <hr />
          <div className='conatiner-title'><i>Available Tables</i></div>
          <hr />
        {
          currentTable?.map((tableItem, index) => {
            if (tableItem.occupied == false) {
              
              return (<TableCard tableNumber={tableItem.tableNumber} userId={tableItem._id} />)
            }
          })
        }
        </div>
       
      </div>
     
  )
}

export default BookTable














// import React, { useEffect } from "react";
// import axios from "axios";
// import swal from "sweetalert";
// import { myTableBook } from "../../util/Table";
// import "./BookTable.css"

// import { loginRequired } from "../../util/loginRequired";
// // import Navbar from "../../components/Navbar/Navbar";
// import {currentUser} from"../../util/currentUser";//for taking Navber in this page
// function BookTable() {
//     async function Tableconfirm(){
//         const responce = await axios.post("/bookTable", {
//             userId: currentUser._id,
//             tableNumber: localStorage.getItem("tableNumber") || 1, 
//             items:myTableBook

//         })
//        if (responce.data.success){
//         await swal("Table booked", responce.data.message, "success")
//         localStorage.removeItem("list")
//         window.location.href = "/"
//        }
//     }




//     useEffect(() => {
//         {
//             loginRequired()
//         }
//     }, [])




//     return (
//         <div>
//             {/* <Navbar user={currentUser?.name}/> */}
//             <div className="container">
                
//                    <div className="Tables"><button class = "book">Book Table 1</button></div>
//                    <div className="Tables"><button class = "book">Book Table 2</button></div>
//                    <div className="Tables"><button class = "book">Book Table 3</button></div>
                   
                  
//                </div>
//                <button className="btn-confirm" onClick={Tableconfirm}>ConfirmTable</button>
         
//         </div>
//     )
// }

// export default BookTable