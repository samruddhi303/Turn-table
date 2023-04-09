import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './views/Home/Home.js'
import Login from "./views/Login/Login.js"
import Signup from  "./views/Signup/Signup.js"
import BookTable from './views/BookTable/BookTable.js'
import MyOrders from './views/MyOrders/MyOrders.js'
import MyList from './views/MyList/MyList.js'


function App() {
  return (
    <div>
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/bookTable" element={<BookTable />} />
          <Route path="/myList" element={<MyList />} />
         
          <Route path="/myOrders" element={<MyOrders />} />
          </Routes>
          </BrowserRouter>
    </div>
  )
}
export default App