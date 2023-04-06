import React, { useState, useEffect} from 'react'
import axios from "axios"
import swal from 'sweetalert';
import { currentUser } from '../../util/currentUser'
import  "./Login.css"

function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')// eslint-disable-next-line

    useEffect(() => {
        if(currentUser){
            window.location.href="/"
        }
      }, [])
    
    async function loginUser() {
     const response = await axios.post('/login', {
        email: email,
        password: password,
       
    })
    console.log(response.data)
    if (response.data.success){
         await swal({
            title: "Success",
            text: response.data.message,
            icon: "success",
            button: "Aww yiss!",
          });
      localStorage.setItem('currentUser', JSON.stringify(response.data.data));
      window.location.href="/"

    }
    else{
        await swal({
            title: "Error",
            text: response.data.message,
            icon: "error",
            button: "Try Again",
          });
        setEmail("")
        setPassword("")
        localStorage.removeItem('currentUser', JSON.stringify(response.data.data));
    }

}
  return (
       <div>
        <h1 className='text-center'>Login</h1>
        <div className='row'>
            <div className='col-md-6'>

            </div>
            <div className='col-md-6'>
                <div className='form-container'>
                    <form>
                        <div className='form-group'>

     
                            <div>
                            <label htmlFor='email'>Email: </label>
                            <input type='text' className='form-control' id='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                            </div>

                            <div>
                            <label htmlFor='password'>Password: </label>
                            <input type='password' className='form-control' id='password' placeholder='Enter Password'  value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
                           
                        </div>
                        <div>
                            <button type = 'button' className='login-button' onClick={loginUser}>Login</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </div>
  )
 
}

export default Login