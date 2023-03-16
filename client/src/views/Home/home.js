import React from 'react'
import { currentUser } from '../../util/currentUser'


function home() {

  function logOut()
  {
    localStorage.removeItem('currentUser');
     window.location.href = '/login'
  }

  return (
       <div>
        <h1 className='text-center'>Home</h1>
        <h2>{currentUser?.name}</h2>

        <button type="button" className='btn btn-primary' onClick= {logOut} >Logout</button>

       </div>
  ) 
}
export default home
 